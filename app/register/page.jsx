"use client";

import React, { useState } from "react";
import { registerForOpen } from "../../utils/supabase/actions";
import classes from '../register/register.module.css';
import CategoryButton from '../../components/categoryButton'

const RegisterOpen = () => {
  const [formData, setFormData] = useState({});
  const [submitedFlag, setSubmitFlag] = useState(false);
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);

    const res = registerForOpen( formData );
    setSubmitFlag(res);
    window.location.href = "/participants";
  };

  return (
    <div className="bg-background min-h-screen py-8">
      {submitedFlag && (
        <div className="card text-center">
          <h2 className="text-heading text-2xl mb-4">Thank you for registration!</h2>
          <p className="text-body">Your registration has been submitted successfully.</p>
        </div>
      )}
      
      {!submitedFlag && (
        <div className="max-w-2xl mx-auto px-4">
          <div className="card">
            <h1 className="text-heading text-3xl mb-6 text-center">Register for Belgrade Open 2025</h1>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className={classes.row}>
                <label htmlFor="e_mail" className="text-heading font-medium">E-mail</label>
                <input
                  type="email"
                  id="e_mail"
                  name="e_mail"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-go-grid/30 bg-neutral-panel text-neutral-text focus:border-serbian-red focus:outline-none focus:ring-2 focus:ring-serbian-red/20 transition-all duration-200"
                />
              </div>
              
              <div className={classes.row}>
                <label htmlFor="first_name" className="text-heading font-medium">First name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-go-grid/30 bg-neutral-panel text-neutral-text focus:border-serbian-red focus:outline-none focus:ring-2 focus:ring-serbian-red/20 transition-all duration-200"
                />
              </div>
              
              <div className={classes.row}>
                <label htmlFor="last_name" className="text-heading font-medium">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-go-grid/30 bg-neutral-panel text-neutral-text focus:border-serbian-red focus:outline-none focus:ring-2 focus:ring-serbian-red/20 transition-all duration-200"
                />
              </div>
              
              <div className={classes.row}>
                <label htmlFor="category" className="text-heading font-medium">Go Category</label>
                <CategoryButton
                  name="category"
                  handleChange={handleChange}
                  required
                />
              </div>
              
              <div className={classes.row}>
                <label htmlFor="club" className="text-heading font-medium">Club</label>
                <input
                  type="text"
                  id="club"
                  name="club"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-go-grid/30 bg-neutral-panel text-neutral-text focus:border-serbian-red focus:outline-none focus:ring-2 focus:ring-serbian-red/20 transition-all duration-200"
                />
              </div>
              
              <div className={classes.row}>
                <label htmlFor="country" className="text-heading font-medium">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-go-grid/30 bg-neutral-panel text-neutral-text focus:border-serbian-red focus:outline-none focus:ring-2 focus:ring-serbian-red/20 transition-all duration-200"
                />
              </div>

              <div className={classes.row}>
                <label htmlFor="note" className="text-heading font-medium">Do you need any assistance?</label>
                <textarea
                  id="note"
                  name="note"
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-go-grid/30 bg-neutral-panel text-neutral-text focus:border-serbian-red focus:outline-none focus:ring-2 focus:ring-serbian-red/20 transition-all duration-200 resize-vertical"
                />
              </div>
              
              <div className="flex justify-center mt-6">
                <button className="btn btn-primary text-lg px-8 py-3" type="submit">
                  Register for Tournament
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterOpen;
