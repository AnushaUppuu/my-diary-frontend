import React from "react";
import { useForm } from "react-hook-form";
import "./Create.css";
function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="createContainer">
      <h1>Create a Diary</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="diaryContainer">
        <input
          placeholder="Enter title"
          className="input-box"
          {...register("title")}
        />
        <div className="radioDiv">
          <label>Select the type of the mood of this diary page--{">"}</label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="sad"
              type="radio"
              {...register("radio")}
            />
            sad
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="happy"
              type="radio"
              {...register("radio")}
            />
            happy
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="exciting"
              type="radio"
              {...register("radio")}
            />
            exciting
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="unexpected"
              type="radio"
              {...register("radio")}
            />
            unexpected
          </label>
          <label className="radio-label">
            <input
              placeholder="mood"
              value="other"
              type="radio"
              {...register("radio")}
            />
            other
          </label>
        </div>
        <input
          placeholder="date"
          type="date"
          className="input-box"
          {...register("date")}
        />
        <textarea
          placeholder="Enter the Message body"
          className="textarea"
          {...register("messageBody")}
        />
        <button className="create-button">Create</button>
      </form>
    </div>
  );
}

export default Create;
