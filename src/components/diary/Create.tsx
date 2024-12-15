import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./Create.css";
import { Authentication } from "../../context/Authentication";
import { useNavigate } from "react-router-dom";
function Create() {
  const { token, username } = useContext(Authentication);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    const sendData = {
      title: data.title,
      messageBody: data.messageBody,
      username: username,
      mood: data.radio,
      date: data.date,
    };
    const result = await fetch("http://localhost:4000/users/diary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(sendData),
    });
    if (result.ok) {
      alert("Diary page created successfully");
      navigate("/home");
    } else {
      alert("Try again!");
    }
  };
  return (
    <div className="createContainer">
      <h1>Create a Diary</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="diaryContainer">
        <input
          placeholder="Enter title"
          className="input-box"
          {...register("title", {
            required: "Please Enter the title",
            minLength: 4,
          })}
        />
        <div className="radioDiv">
          <label>Select the type of the mood of this diary page--{">"}</label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="sad"
              type="radio"
              {...register("radio", { required: "Please select any option" })}
            />
            sad
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="happy"
              type="radio"
              {...register("radio", { required: "Please select any option" })}
            />
            happy
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="exciting"
              type="radio"
              {...register("radio", { required: "Please select any option" })}
            />
            exciting
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="unexpected"
              type="radio"
              {...register("radio", { required: "Please select any option" })}
            />
            unexpected
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="other"
              type="radio"
              {...register("radio", { required: "Please select any option" })}
            />
            other
          </label>
        </div>
        <input
          placeholder="date"
          type="date"
          className="input-box"
          {...register("date", { required: "Please select any option" })}
        />
        <textarea
          placeholder="Enter the Message body"
          className="textarea"
          {...register("messageBody", {
            required: "Please Enter the message body",
          })}
        />
        <button className="create-button">Create</button>
      </form>
    </div>
  );
}

export default Create;
