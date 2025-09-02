"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content }) => {
  return (
    <div className="py-4">
      <MDEditor value={content} preview="preview" height={500} className="w-auto mx-auto" />
    </div>
  );
};

export default CoverLetterPreview;