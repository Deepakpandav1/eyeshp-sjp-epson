// src/components/FaqSection.tsx

import React, { useState } from "react";
import {
  faqCategories,
  FAQCategory,
  FAQItem,
} from "../utils/appUtils/constant";

const FaqSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggle = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      {/* Header + Logo */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold text-center">
          📝 FAQs / Patient Guide
        </h2>
      </div>

      {/* FAQ Categories */}
      {faqCategories.map((category: FAQCategory, catIdx: number) => (
        <div key={catIdx} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            {category.emoji} {category.title}
          </h3>
          <div className="space-y-3">
            {category.items.map((item: FAQItem, idx: number) => {
              const isOpen = openQuestion === item.question;
              return (
                <div key={idx} className="border rounded-lg shadow-sm">
                  <button
                    onClick={() => toggle(item.question)}
                    className="w-full flex justify-between items-center text-left p-4 font-medium focus:outline-none"
                  >
                    <span>
                      {item.icon} {item.question}
                    </span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 whitespace-pre-wrap text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
