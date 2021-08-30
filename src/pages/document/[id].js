import React from "react";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("../../components/textEditor"), {
  ssr: false,
});

export default function Editor() {
  return (
    <div>
      <TextEditor />
    </div>
  );
}
