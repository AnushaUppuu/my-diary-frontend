import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authentication } from "../../context/Authentication";
import { Diary } from "../../types/Diary";
import SingleDiary from "../diary/SingleDiary";

function Home() {
  const { token, username } = useContext(Authentication);
  const navigate = useNavigate();
  const [diaries, setDiaries] = useState<Diary[]>([]);
  useEffect(() => {
    async function diariesFetch() {
      const result = await fetch(
        `http://localhost:4000/users/diaries/${username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.ok) {
        const value = await result.json();
        console.log(value);
        setDiaries(value);
      }
    }
    if (token) {
      diariesFetch();
    }
  }, []);
  return (
    <div>
        <h1>All your diaries</h1>
      {diaries &&
        diaries.map((data) => (
          <div className="dairies-Box">
            <SingleDiary key={data.title} diary={data} />
          </div>
        ))}
    </div>
  );
}

export default Home;
