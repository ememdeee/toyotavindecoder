'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import VinLocationPopup from '../components/VinLocationPopup';

interface SiteFormProps {
    reportType?: 'VHR' | 'WS'; // Define the allowed reportType values
    reportStyle?: 'modern' | 'basic'; // Allowed style values
    formStyle?: 'vehicleinsights' | 'motorcyclecheck' | 'canadawebsite'; // Allowed style values
    reportTab?: boolean; // Optional boolean for tab visibility
    forceMobileLayout?: boolean; // Optional boolean for tab visibility
    defaultTab?: 'vin' | 'plate'; // Allowed default tab values
}

const SiteForm: React.FC<SiteFormProps> = ({ 
  reportType = 'VHR',
  reportStyle = 'modern',   // First option for reportStyle
  formStyle = 'vehicleinsights',   // First option for formStyle
  reportTab = true,         // Default to true
  forceMobileLayout = false,         // Default to false
  defaultTab = 'vin',       // First option for defaultTab
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Add loading state
  const [vin, setVin] = useState<string>('');
  const [plate, setPlate] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [refPage, setRefPage] = useState('');
  
  const states = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' },
  ];

  // Input validation and formatting
  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uppercasedValue = e.target.value.toUpperCase();
    setVin(uppercasedValue.slice(0, 17)); // Max length: 17
  };

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uppercasedValue = e.target.value.toUpperCase();
    setPlate(uppercasedValue.slice(0, 8)); // Max length: 8
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;

      if (url === window.location.origin || url === `${window.location.origin}/`) {
        setRefPage('homePage');
      } else {
        // Transform the URL by removing protocol, domain, and slashes
        const slug = url
          .replace(window.location.origin, '') // Remove origin
          .replace(/^\/|\/$/g, '')            // Trim leading/trailing slashes
          .replace(/\//g, '_');               // Replace slashes with underscores
        setRefPage(slug);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (activeTab === 'vin') {
      if (!vin || vin.length < 5 || vin.length > 17) {
        newErrors.vin = 'VIN must be between 5 and 17 characters.';
      }
    } else if (activeTab === 'plate') {
      if (!plate || plate.length < 5 || plate.length > 8) {
        newErrors.plate = 'License Plate must be between 5 and 8 characters.';
      }
      if (!state) {
        newErrors.state = 'State is required.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    // Fetch license plate to VIN function
    const fetchVinData = async (stateInputValue: string, plateInputValue: string): Promise<string> => {
        try {
          const requestData = {
            state: stateInputValue,
            plate: plateInputValue,
            email: 'test@test.com', // Static email
          };
      
          const apiUrl = 'https://app.detailedvehiclehistory.com/landing/get_license';
      
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded', // Match the jQuery behavior
            },
            body: new URLSearchParams(requestData), // Use URLSearchParams for form data
          });
      
          // Log the raw response for debugging
          const rawResponse = await response.text();
          console.log('Raw API Response:', rawResponse);
      
          // Parse response manually
          const responseData = JSON.parse(rawResponse);
          console.log('Parsed Response Data:', responseData);
      
          const { vin } = responseData;
      
          if (!vin) {
            throw new Error('VIN not found in the response');
          }
      
          return vin;
        } catch (error) {
          console.error('Failed to fetch VIN:', error);
          throw error;
        }
      };

    const handleSubmit = async () => {

    if (validateForm()) {
      setIsLoading(true);
      if (activeTab === 'vin') {
        console.log('Submitted Data:', { vin });
        
        // Reset form values
        setVin('');

        // Redirect with VIN data
        const redirectUrl = reportType === 'WS'
          ? `https://www.clearvin.com/en/window-sticker/checkout/${vin}/?a_aid=b3a49a62&chan=tv&variation=${refPage}`
          : `https://www.clearvin.com/en/payment/prepare/${vin}/?a_aid=b3a49a62&chan=tv&variation=${refPage}`;

        window.location.href = redirectUrl;
      } else if (activeTab === 'plate') {
        console.log('Submitted Data:', { plate, state });

        try {
            // Fetch the VIN based on state and license plate
            const fetchedVin = await fetchVinData(state, plate);
    
            console.log('Fetched VIN:', fetchedVin);
    
            // Reset form values
            setPlate('');
            setState('');

            // Redirect with VIN data
            const redirectUrl = reportType === 'WS'
            ? `https://www.clearvin.com/en/window-sticker/checkout/${fetchedVin}/?a_aid=b3a49a62&chan=tv&variation=${refPage}`
            : `https://www.clearvin.com/en/payment/prepare/${fetchedVin}/?a_aid=b3a49a62&chan=tv&variation=${refPage}`;
            
            window.location.href = redirectUrl;
            } catch (error) {
              alert('Error fetching VIN. Please try again.' + error);
            } finally {
              setIsLoading(false); // Reset loading state
            }
        }
      }
    };

  return (
    <Card id='siteForm' className={`${formStyle === 'canadawebsite' ? 'bg-white/90' : 'bg-transparent'}  ${reportStyle === 'basic' ? 'border-none shadow-none' : ''}`}>
      <CardContent className={forceMobileLayout ? 'py-6 px-4' : 'p-6'}>
        {/* Tabs Section */}
        <Tabs defaultValue={defaultTab} className="w-full" onValueChange={(val) => { setActiveTab(val); setErrors({}); }}>

          {reportTab && (
            <TabsList className={`
               w-full ${forceMobileLayout ? "flex flex-col h-fit gap-1 mb-4" : "grid grid-cols-2 mb-6"}
            `}>
              <TabsTrigger value="vin" className='w-full'>By VIN</TabsTrigger>
              <TabsTrigger value="plate" className='w-full'>By US License Plate</TabsTrigger>
            </TabsList>
          )}

          {/* Content Section */}
          <div className={`${forceMobileLayout ? "space-y-2" : "space-y-4"}`}>
            {activeTab === 'vin' && (
              <div>
                <Input
                  placeholder="Enter VIN Number"
                  className="text-sm"
                  value={vin}
                  onChange={handleVinChange}
                />
                {errors.vin && <p className="text-red-500 text-sm">{errors.vin}</p>}
              </div>
            )}

            {activeTab === 'plate' && (
              <div className={`grid ${forceMobileLayout ? "grid-cols-1 gap-2" : "grid-cols-2 gap-4"}`}>
                <div>
                  <Input
                    placeholder="License Plate"
                    className="text-sm"
                    value={plate}
                    onChange={handlePlateChange}
                  />
                  {errors.plate && <p className="text-red-500 text-sm">{errors.plate}</p>}
                </div>
                <div>
                  <select
                    className="text-sm border rounded-md p-2 w-full bg-transparent"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state.code} className='text-black'>
                        {state.name}
                        </option>
                    ))}
                  </select>
                  {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                </div>
              </div>
            )}


            {/* Search Button */}
            <Button 
              className={`w-full ${forceMobileLayout ? "!mt-4" : ""} ${
                formStyle === 'motorcyclecheck' 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : formStyle === 'canadawebsite'
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : ''
              }`} 
              onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Please wait...' : 'Search'}
            </Button>


            {/* Links Section */}
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <Link
                  href="#"
                  className="hover:text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPopupOpen(true);
                  }}
                >
                Where can I find the VIN?
              </Link>
            </div>
          </div>
        </Tabs>
        <VinLocationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </CardContent>
    </Card>
  );
};

export default SiteForm;