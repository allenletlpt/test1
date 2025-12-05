import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure this is handled securely.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const CONFERENCE_CONTEXT = `
You are the intelligent assistant for the "FutureTech 2024" (未來科技趨勢研討會).
Conference Details:
- Date: October 15-16, 2024
- Location: Taipei International Convention Center (TICC), Taipei, Taiwan.
- Theme: "Bridging AI, Quantum Computing, and Sustainable Future".
- Key Speakers: Dr. Emily Chen (AI Ethics), Prof. Alan Turing II (Quantum), Sarah Connor (Robotics).
- Submission Deadline: September 1, 2024.
- Registration Deadline: October 1, 2024.

Your goal is to be helpful, professional, and enthusiastic. You can answer questions about the schedule, help refine submission abstracts, or guide users on how to register.
When helping with abstract submissions, provide constructive feedback on clarity, impact, and relevance to the theme.

Answer in Traditional Chinese (繁體中文) unless the user asks in English.
`;

export const createConferenceChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: CONFERENCE_CONTEXT,
      temperature: 0.7,
    },
  });
};

export const refineAbstract = async (abstractText: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
    請擔任學術研討會的評審委員。
    請針對以下這篇研討會論文摘要提供改進建議與潤飾版本。
    摘要內容：
    "${abstractText}"
    
    請提供：
    1. 簡短評語 (3點)
    2. 建議的繁體中文潤飾版本
    3. 建議的英文標題
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    
    return response.text || "無法產生建議，請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("AI 服務暫時無法使用");
  }
};
