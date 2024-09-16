import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BusinessWriting } from "./Pages/Business_Writing_All/BusinessWriting";
import { ContentWriting } from "./Pages/Content_Writing_All/ContentWriting";
import { ContactUs } from "./Pages/ContactUs";
import { About } from "./Pages/About";
import { ClassofServe } from "./Pages/ClassServe";
import { HowItWorks } from "./Pages/HowItWorks";
import {HonorCode} from './Pages/HonorCode';
import { Blogs } from "./Pages/Blogs";
import { AcademicWriting } from "./Pages/Academic_Writing_All/AcademicWriting";
import { FAQS } from "./Pages/FAQS";
import { SignIn } from "./Pages/Account/SignIn";
import { SignUp } from "./Pages/Account/SignUp";
import { BusinessServices1 } from "./Pages/Business_Writing_All/BusinessServices1";
import { Error } from "./Pages/Error";
import { BusinessServices2 } from "./Pages/Business_Writing_All/BusinessServices2";
import { BusinessServices3 } from "./Pages/Business_Writing_All/BusinessServices3";
import { ContentServices1 } from "./Pages/Content_Writing_All/ContentServices1";
import { ContentServices2 } from "./Pages/Content_Writing_All/ContentServices2";
import { AcademicServices1 } from "./Pages/Academic_Writing_All/AcademicServices1";
import { Sample } from "./Pages/Sample";
import { LandingPage } from "./Pages/LandingPage";
import ScrollToTop from "./Components/ScrollTop/ScrollToTop";
import { ContentServices3 } from "./Pages/Content_Writing_All/ContentServices3";
import { AcademicServices2 } from "./Pages/Academic_Writing_All/AcademicServices2";
import { AcademicServices3 } from "./Pages/Academic_Writing_All/AcademicServices3";
import { AuthProvider } from "./AuthContext";
import Dashboard  from "./Pages/admin/Dashboard";
import ManageFeedbacks from "./Pages/admin/ManageFeedbacks";
import ManageComments from "./Pages/admin/ManageComments";
import ManageContacts from "./Pages/admin/ManageContacts";
import ManageUsers from "./Pages/admin/ManageUsers";
import ManageNewsLetters from "./Pages/admin/ManageNewsLetters";
import ManageBlogs from "./Pages/admin/ManageBlogs";
import ManageFAQ from "./Pages/admin/ManageFAQ";
import BlogSingle from "./Pages/BlogSingle";
import PostFaq from "./Pages/admin/PostFaq";
import ManageServices from "./Pages/admin/ManageServices";
import Profile from "./Pages/Profile";
import ChangePassword from "./Pages/ChangePassword";
import Cart from "./Pages/Cart/Index";
import AddOrder from "./Pages/AddOrder";
const ProjectRoutes = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="Home" element={<Home />} />
            <Route path="Business_writing" element={<BusinessWriting />} />
            <Route path="Business_Services" element={<BusinessServices1 />} />
            <Route path="Business_sub_Services" element={<BusinessServices2 />} />
            <Route path="Business_Services3" element={<BusinessServices3 />} />
            <Route path="ContentWriting" element={<ContentWriting />} />
            <Route path="Content_Services" element={<ContentServices1 />} />
            <Route path="Content_sub_Services" element={<ContentServices2 />} />
            <Route path="Content_Services3" element={<ContentServices3 />} />
            <Route path="AcademicWriting" element={<AcademicWriting />} />
            <Route path="Academic_Services" element={<AcademicServices1 />} />
            <Route path="Academic_Services2" element={<AcademicServices2 />} />
            <Route path="Academic_Services3" element={<AcademicServices3 />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="About" element={<About />} />
            <Route path="ClassOfServe" element={<ClassofServe />} />
            <Route path="HowItWorks" element={<HowItWorks />} />
            <Route path="HonorCode" element={<HonorCode />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogSingle />} />
            <Route path="Faq's" element={<FAQS />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="*" element={<Error />} />
            <Route path="Sample" element={<Sample />} />
            <Route path="adminMain" element={<Dashboard />} />
            <Route path="admin/Manage_Feedbacks" element={<ManageFeedbacks />} />
            <Route path="admin/Manage_Comments" element={<ManageComments />} />
            <Route path="admin/Manage_Contacts_Details" element={<ManageContacts />} />
            <Route path="admin/Manage_Users" element={<ManageUsers />} />
            <Route path="admin/Manage_NewsLetters" element={<ManageNewsLetters />} />
            <Route path="admin/Manage_Blogs" element={<ManageBlogs />} />
            <Route path="admin/Manage_Faqs" element={<ManageFAQ />} />
            <Route path="admin/create-faq" element={<PostFaq/>}/>
            <Route path="admin/Manage-services" element={<ManageServices/>}/>
            <Route path="Profile" element={<Profile/>}/>
            <Route path="ChangePassword" element={<ChangePassword/>}/>
            <Route path="Cart" element={<Cart/>}/>
            <Route path="AddOrder" element={<AddOrder />}/>
           </Routes>
        </Router>
        <Outlet />
      </AuthProvider>
    </>
  );
};

export default ProjectRoutes;
