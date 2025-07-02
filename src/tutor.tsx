import React, { useState } from 'react';
import { Upload, FileText, Calendar, User, Mail, Phone, Building, Hash, Globe, ChevronDown } from 'lucide-react';

// --- Helper Data ---
// In a real app, you might get this from a library or an API
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const countries = ['Ghana', 'Nigeria', 'United States', 'United Kingdom', 'Canada']; // Example countries
const courses = ['Data Analytics', 'Software Development', 'Digital Marketing', 'Cloud Computing'];
const statuses = ['Student', 'Employed', 'Unemployed', 'Other'];
const educationLevels = ['High School', 'Associate Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctorate'];


// --- Type Definition for Form State ---
interface IFormData {
  firstName: string;
  lastName: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: string;
  streetAddress: string;
  streetAddressLine2: string;
  city: string;
  postalCode: string;
  country: string;
  email: string;
  mobileNumber: string;
  phoneNumber: string;
  company: string;
  ghanaCardNo: string;
  ghanaCardImage: File | null;
  course: string;
  status: string;
  levelOfEducation: string;
  additionalComments: string;
}

// --- Main App Component ---
export default function App() {
  // --- State Management ---
  const [formData, setFormData] = useState<IFormData>({
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    postalCode: '',
    country: '',
    email: '',
    mobileNumber: '',
    phoneNumber: '',
    company: '',
    ghanaCardNo: '',
    ghanaCardImage: null,
    course: '',
    status: '',
    levelOfEducation: 'High School',
    additionalComments: '',
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // --- Event Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prevState => ({
        ...prevState,
        ghanaCardImage: file,
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the formData to a server here.
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };
  
  const handleSave = () => {
      // In a real application, you might save the form data to local storage or a draft state on the server.
      console.log('Form Saved:', formData);
      alert('Your progress has been saved!'); // Using a simple alert for demonstration
  }

  // --- Reusable Input Components for Cleaner JSX ---
  interface InputFieldProps {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    icon?: React.ElementType;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type = 'text',
    placeholder,
    required = false,
    icon: Icon,
    value,
    onChange,
  }) => (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />}
    </div>
  );

  interface SelectFieldProps {
    id: string;
    name: string;
    required?: boolean;
    icon?: React.ElementType;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
  }

  const SelectField: React.FC<SelectFieldProps> = ({ id, name, required = false, icon: Icon, value, onChange, children }) => (
    <div className="relative w-full">
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      >
        {children}
      </select>
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />}
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  );

  // --- Render Logic ---
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">Thank you for applying to the Microsoft Skills for Jobs Microdegree Program. We have received your information.</p>
            <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
                Submit Another Application
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
        {/* Form Header */}
        <div className="text-center mb-8">
            <img src="https://placehold.co/150x50/ffffff/333333?text=LINGUA+INSTITUTE" alt="Lingua Institute Logo" className="mx-auto mb-4 h-12" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Microsoft Skills for Jobs Microdegree Program</h1>
          <p className="text-gray-500 mt-2">Fill out the form carefully for registration</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section: Personal Information */}
          <fieldset className="p-6 border border-gray-200 rounded-lg">
            <legend className="px-2 text-lg font-semibold text-gray-700">Personal Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2">Student Name *</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <InputField id="firstName" name="firstName" placeholder="First Name" required icon={User} value={formData.firstName} onChange={handleChange} />
                  <InputField id="lastName" name="lastName" placeholder="Last Name" required icon={User} value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-600 mb-2">Gender *</label>
                <SelectField id="gender" name="gender" required icon={User} value={formData.gender} onChange={handleChange}>
                  <option value="">Please Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </SelectField>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-2">Birth Date *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <SelectField id="birthDay" name="birthDay" required icon={Calendar} value={formData.birthDay} onChange={handleChange}>
                    <option value="">Day</option>
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                  </SelectField>
                  <SelectField id="birthMonth" name="birthMonth" required icon={Calendar} value={formData.birthMonth} onChange={handleChange}>
                    <option value="">Month</option>
                    {months.map((month) => <option key={month} value={month}>{month}</option>)}
                  </SelectField>
                  <SelectField id="birthYear" name="birthYear" required icon={Calendar} value={formData.birthYear} onChange={handleChange}>
                    <option value="">Year</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                  </SelectField>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Section: Contact Information */}
          <fieldset className="p-6 border border-gray-200 rounded-lg">
            <legend className="px-2 text-lg font-semibold text-gray-700">Contact Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                <InputField id="streetAddress" name="streetAddress" placeholder="Street Address" icon={Globe} value={formData.streetAddress} onChange={handleChange} />
              </div>
              <div className="md:col-span-2">
                 <InputField id="streetAddressLine2" name="streetAddressLine2" placeholder="Street Address Line 2" icon={Globe} value={formData.streetAddressLine2} onChange={handleChange} />
              </div>
              <InputField id="city" name="city" placeholder="City" icon={Globe} value={formData.city} onChange={handleChange} />
              <InputField id="postalCode" name="postalCode" placeholder="Postal / Zip Code" icon={Globe} value={formData.postalCode} onChange={handleChange} />
              <div className="md:col-span-2">
                <SelectField id="country" name="country" icon={Globe} value={formData.country} onChange={handleChange}>
                  <option value="">Select Country</option>
                  {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </SelectField>
              </div>
              <InputField id="email" name="email" type="email" placeholder="E-mail Address" required icon={Mail} value={formData.email} onChange={handleChange} />
              <InputField id="mobileNumber" name="mobileNumber" type="tel" placeholder="Mobile Number" required icon={Phone} value={formData.mobileNumber} onChange={handleChange} />
              <InputField id="phoneNumber" name="phoneNumber" type="tel" placeholder="Phone Number (Optional)" icon={Phone} value={formData.phoneNumber} onChange={handleChange} />
              <InputField id="company" name="company" placeholder="Company (Optional)" icon={Building} value={formData.company} onChange={handleChange} />
            </div>
          </fieldset>

          {/* Section: Identification & Education */}
          <fieldset className="p-6 border border-gray-200 rounded-lg">
            <legend className="px-2 text-lg font-semibold text-gray-700">Identification & Education</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="ghanaCardNo" className="block text-sm font-medium text-gray-600 mb-2">Ghana Card No. *</label>
                    <InputField id="ghanaCardNo" name="ghanaCardNo" placeholder="GHA-XXXXXXXXX-X" required icon={Hash} value={formData.ghanaCardNo} onChange={handleChange} />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Ghana Card Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="ghanaCardImage" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                    <span>Upload a file</span>
                                    <input id="ghanaCardImage" name="ghanaCardImage" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,.pdf" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            {fileName && <p className="text-sm text-green-600 mt-2"><FileText className="inline-block h-4 w-4 mr-1" />{fileName}</p>}
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-600 mb-2">Course *</label>
                    <SelectField id="course" name="course" required value={formData.course} onChange={handleChange}>
                        <option value="">Please Select</option>
                        {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </SelectField>
                </div>
                 <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-600 mb-2">Current Status *</label>
                    <SelectField id="status" name="status" required value={formData.status} onChange={handleChange}>
                        <option value="">Please Select</option>
                        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </SelectField>
                </div>
                 <div className="md:col-span-2">
                    <label htmlFor="levelOfEducation" className="block text-sm font-medium text-gray-600 mb-2">Highest Level of Education *</label>
                    <SelectField id="levelOfEducation" name="levelOfEducation" required value={formData.levelOfEducation} onChange={handleChange}>
                        {educationLevels.map(level => <option key={level} value={level}>{level}</option>)}
                    </SelectField>
                </div>
            </div>
          </fieldset>
          
          {/* Section: Additional Comments */}
          <div>
            <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-600 mb-2">Additional Comments</label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              rows={4}
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Any other information you'd like to share..."
              value={formData.additionalComments}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              Save
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
