import React from "react";
import { Link } from "react-router-dom";
import { NotFoundStaticData } from "../utils/staticConstant";

const NotFoundPage = () => {
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center text-xxl text-white">
        {NotFoundStaticData.NotFoundGeneral__text} <Link to="/" className="text-yellow-500  p-2">{NotFoundStaticData.PageName__text}</Link>
    </div>
  );
}

export default NotFoundPage;