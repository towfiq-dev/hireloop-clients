"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { X, MapPin, Upload, ChevronDown } from "lucide-react";
import { createCompanies } from "@/lib/companies/companies";
import { toast } from "react-toastify";

export default function CompaniesForm({recruiter}) {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  //const [company, setCompany] = useState(recruiterCompany)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      industry: "",
      websiteUrl: "",
      location: "",
      employeeCount: "",
      description: "",
    },
  });

  const logoFile = watch("companyLogo");
  React.useEffect(() => {
    if (logoFile && logoFile.length > 0) {
      const file = logoFile[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [logoFile]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let logoUrl = "";

      if (data.companyLogo && data.companyLogo.length > 0) {
        const imageFile = data.companyLogo[0];
        const formData = new FormData();
        formData.append("image", imageFile);

        const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
          method: "POST",
          body: formData,
        });

        const imgbbResult = await imgbbResponse.json();

        if (imgbbResult.success) {
          logoUrl = imgbbResult.data.url;
        } else {
          toast.error("Failed to upload logo image.");
          setLoading(false);
          return;
        }
      }

      const finalCompanyData = {
        companyName: data.companyName,
        industry: data.industry,
        websiteUrl: data.websiteUrl ? `https://${data.websiteUrl.replace(/^(https?:\/\/)?/, "")}` : "",
        location: data.location,
        employeeCount: data.employeeCount,
        description: data.description,
        logo: logoUrl,
        //status: company ? company.status : 'Pending',
        recruiterId: recruiter.id
      };

      const result = await createCompanies(finalCompanyData);

      if (result?.insertedId) {
        toast.success("Company Registered Successfully!");
        setImagePreview(null);
        reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Failed to register company:", error);
      alert("Server error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] p-4 text-[#ededed]">
      {/* Main Card Container */}
      <div className="w-full max-w-2xl bg-[#121212] border border-[#1f1f1f] rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#1f1f1f]">
          <div>
            <h2 className="text-xl font-semibold text-[#f5f5f5] tracking-tight">
              Register New Company
            </h2>
            <p className="text-sm text-[#a1a1aa] mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
          <button
            type="button"
            className="p-1.5 rounded-lg hover:bg-[#1f1f1f] transition-colors text-[#a1a1aa] hover:text-[#f5f5f5]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#e4e4e7]">Company Name</label>
              <input
                type="text"
                placeholder="e.g. Acme Corp"
                className={`w-full h-11 px-3 bg-[#1a1a1a] border rounded-xl text-white placeholder-[#52525b] outline-none transition-colors text-sm
                  ${errors.companyName ? 'border-red-500 focus:border-red-500' : 'border-[#2e2e2e] hover:border-[#404040] focus:border-[#f5f5f5]'}`}
                {...register("companyName", { required: "Company name is required" })}
              />
              {errors.companyName && (
                <span className="text-xs text-red-500 mt-0.5">{errors.companyName.message}</span>
              )}
            </div>

            {/* Industry / Category */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-medium text-[#e4e4e7]">Industry / Category</label>
              <div className="relative flex items-center">
                <select
                  className="w-full h-11 px-3 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-[#404040] focus:border-[#f5f5f5] rounded-xl text-white outline-none transition-colors text-sm appearance-none pr-10 cursor-pointer text-[#ededed] invalid:text-[#52525b]"
                  {...register("industry", { required: "Please select an industry" })}
                >

                  <option value="" hidden className="bg-[#121212]">Select a Item</option>
                  <option value="technology" className="bg-[#121212]">Technology</option>
                  <option value="finance" className="bg-[#121212]">Finance</option>
                  <option value="healthcare" className="bg-[#121212]">Healthcare</option>
                  <option value="education" className="bg-[#121212]">Education</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 text-[#71717a] pointer-events-none" />
              </div>
            </div>

            {/* Website URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#e4e4e7]">Website URL</label>
              <div className="flex items-center w-full h-11 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-[#404040] focus-within:!border-[#f5f5f5] rounded-xl transition-colors overflow-hidden px-3">
                <span className="text-sm text-[#71717a] pr-2 border-r border-[#2e2e2e] select-none">
                  https://
                </span>
                <input
                  type="text"
                  placeholder="www.company.com"
                  className="w-full h-full bg-transparent outline-none pl-2 text-white placeholder-[#52525b] text-sm"
                  {...register("websiteUrl")}
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#e4e4e7]">Location</label>
              <div className={`flex items-center w-full h-11 bg-[#1a1a1a] border rounded-xl transition-colors px-3 focus-within:!border-[#f5f5f5]
                ${errors.location ? 'border-red-500 focus-within:!border-red-500' : 'border-[#2e2e2e] hover:border-[#404040]'}`}>
                <MapPin size={18} className="text-[#71717a] mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full h-full bg-transparent outline-none text-white placeholder-[#52525b] text-sm"
                  {...register("location", { required: "Location is required" })}
                />
              </div>
              {errors.location && (
                <span className="text-xs text-red-500 mt-0.5">{errors.location.message}</span>
              )}
            </div>

            {/* Employee Count Range */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-sm font-medium text-[#e4e4e7]">Employee Count Range</label>
              <div className="relative flex items-center">
                <select
                  className="w-full h-11 px-3 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-[#404040] focus:border-[#f5f5f5] rounded-xl text-white outline-none transition-colors text-sm appearance-none pr-10 cursor-pointer"
                  {...register("employeeCount", { required: "Please select employee count" })}
                >

                  <option value="" hidden className="bg-[#121212]">Select a Item</option>
                  <option value="1-10" className="bg-[#121212]">1-10 employees</option>
                  <option value="11-50" className="bg-[#121212]">11-50 employees</option>
                  <option value="51-200" className="bg-[#121212]">51-200 employees</option>
                  <option value="201+" className="bg-[#121212]">201+ employees</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 text-[#71717a] pointer-events-none" />
              </div>
            </div>

            {/* Company Logo Upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#e4e4e7]">Company Logo</label>
              <div className="flex items-center gap-3">

                <label className="flex flex-col items-center justify-center w-14 h-14 bg-[#1a1a1a] border border-dashed border-[#404040] rounded-xl cursor-pointer hover:border-[#f5f5f5] hover:bg-[#222] transition-all group overflow-hidden">

                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Logo Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Upload size={18} className="text-[#a1a1aa] group-hover:text-[#f5f5f5] transition-colors" />
                  )}

                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    className="hidden"
                    {...register("companyLogo")}
                  />
                </label>

                <div className="flex flex-col">

                  <span className="text-xs font-medium text-[#e4e4e7]">
                    {imagePreview ? "Image Selected" : "Upload image"}
                  </span>
                  <span className="text-[11px] text-[#71717a] mt-0.5">PNG, JPG up to 5MB</span>
                </div>
              </div>
            </div>

          </div>

          {/* Brief Description */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#e4e4e7]">Brief Description</label>
            <textarea
              placeholder="Tell us about your company's mission and culture..."
              rows={4}
              className="w-full p-3 bg-[#1a1a1a] border border-[#2e2e2e] hover:border-[#404040] focus:border-[#f5f5f5] rounded-xl text-white placeholder-[#52525b] outline-none transition-colors text-sm resize-none"
              {...register("description")}
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1f1f1f] mt-2">
            <button
              type="button"
              className="px-5 h-10 rounded-xl text-sm font-medium text-[#e4e4e7] hover:bg-[#1a1a1a] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 h-10 rounded-xl text-sm font-semibold bg-white text-black hover:bg-[#e4e4e7] transition-all duration-200"
            >
              Register Company
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}