import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul >
              <li className='p-1'><a href="#" className="hover:underline">About</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Careers</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Team</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Swiggy One</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Swiggy Instamart</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact us</h2>
            <ul>
              <li className='p-1'><a href="#" className="hover:underline">Help & Support</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Partner with us</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Ride with us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul>
              <li className='p-1'><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">We deliver to:</h2>
            <ul>
              <li className='p-1'><a href="#" className="hover:underline">Bangalore</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Gurgaon</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Hyderabad</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Delhi</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Mumbai</a></li>
              <li className='p-1'><a href="#" className="hover:underline">Pune</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-8 text-center">
          <p>&copy; All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
