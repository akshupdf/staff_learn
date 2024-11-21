import React, { useState } from 'react';
import {
 Tabs,
 TabsContent,
 TabsList,
 TabsTrigger
} from '@/components/ui/tabs';
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent
} from '@/components/ui/card';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
 BookOpen,
 CheckCircle2,
 Clock,
 Users,
 Phone,
 ShoppingBag
} from 'lucide-react';

const StaffLMS = () => {
 const [currentModule, setCurrentModule] = useState('');
 const [quizStarted, setQuizStarted] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(0);

 const therapistContent = [
 {
 title: "Treatment Protocols",
 sections: [
 "Client Consultation Process",
 "Facial Treatment Steps",
 "Body Treatment Guidelines",
 "Product Application Methods"
 ]
 },
 {
 title: "Safety & Hygiene",
 sections: [
 "Sterilization Procedures",
 "Room Setup Protocol",
 "Emergency Response",
 "COVID-19 Guidelines"
 ]
 }
 ];

 const customerServiceContent = [
 {
 title: "Communication Guidelines",
 sections: [
 "Phone Etiquette",
 "Email Templates",
 "Handling Complaints",
 "Booking Procedures"
 ]
 },
 {
 title: "Product Knowledge",
 sections: [
 "Skincare Lines",
 "Treatment Descriptions",
 "Pricing Structure",
 "Membership Programs"
 ]
 }
 ];

 const salesContent = [
 {
 title: "Sales Techniques",
 sections: [
 "Consultation Process",
 "Product Recommendations",
 "Closing Techniques",
 "Follow-up Procedures"
 ]
 },
 {
 title: "Performance Metrics",
 sections: [
 "Sales Goals",
 "KPI Tracking",
 "Commission Structure",
 "Monthly Reports"
 ]
 }
 ];

 const sampleQuiz = {
 questions: [
 {
 question: "What is the first step in the client consultation process?",
 options: [
 "Recommend products",
 "Complete client intake form",
 "Start treatment immediately",
 "Discuss pricing"
 ],
 correct: 1
 }
 ]
 };

 const renderContent = (content) => (
 <div className="space-y-6">
 {content.map((module, idx) => (
 <Card key={idx} className="hover:shadow-lg transition-shadow">
 <CardHeader>
 <CardTitle className="text-xl flex items-center gap-2">
 <BookOpen className="w-5 h-5" />
 {module.title}
 </CardTitle>
 <CardDescription className="flex items-center gap-2">
 <Clock className="w-4 h-4" />
 Estimated time: 45 mins
 </CardDescription>
 </CardHeader>
 <CardContent>
 <Accordion type="single" collapsible>
 {module.sections.map((section, sectionIdx) => (
 <AccordionItem value={`section-${sectionIdx}`} key={sectionIdx}>
 <AccordionTrigger>{section}</AccordionTrigger>
 <AccordionContent>
 <div className="space-y-4">
 <p className="text-gray-600">
 Content for {section} goes here. This includes detailed SOPs,
 images, and procedural guidelines.
 </p>
 <Button
 onClick={() => {
 setCurrentModule(section);
 setQuizStarted(true);
 }}
 className="mt-4"
 >
 Take Quiz
 </Button>
 </div>
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </CardContent>
 </Card>
 ))}
 </div>
 );

 const renderQuiz = () => (
 <Card className="mt-6">
 <CardHeader>
 <CardTitle>Module Quiz: {currentModule}</CardTitle>
 <CardDescription>
 Complete this quiz to mark the module as finished
 </CardDescription>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 <p className="font-medium">
 {sampleQuiz.questions[currentQuestion].question}
 </p>
 <div className="space-y-2">
 {sampleQuiz.questions[currentQuestion].options.map((option, idx) => (
 <Button
 key={idx}
 variant="outline"
 className="w-full justify-start text-left"
 onClick={() => {
 setQuizStarted(false);
 setCurrentQuestion(0);
 }}
 >
 {option}
 </Button>
 ))}
 </div>
 </div>
 </CardContent>
 </Card>
 );

 return (
 <div className="max-w-5xl mx-auto p-6 space-y-8">
 <header className="text-center mb-8">
 <h1 className="text-3xl font-bold mb-2">Staff Learning Portal</h1>
 <p className="text-gray-600">Access training materials and SOPs</p>
 </header>

 <Tabs defaultValue="therapist" className="w-full">
 <TabsList className="grid w-full grid-cols-3">
 <TabsTrigger value="therapist" className="flex items-center gap-2">
 <Users className="w-4 h-4" />
 Therapist
 </TabsTrigger>
 <TabsTrigger value="customerService" className="flex items-center gap-2">
 <Phone className="w-4 h-4" />
 Customer Service
 </TabsTrigger>
 <TabsTrigger value="sales" className="flex items-center gap-2">
 <ShoppingBag className="w-4 h-4" />
 Sales
 </TabsTrigger>
 </TabsList>

 <TabsContent value="therapist">
 {!quizStarted ? renderContent(therapistContent) : renderQuiz()}
 </TabsContent>

 <TabsContent value="customerService">
 {!quizStarted ? renderContent(customerServiceContent) : renderQuiz()}
 </TabsContent>

 <TabsContent value="sales">
 {!quizStarted ? renderContent(salesContent) : renderQuiz()}
 </TabsContent>
 </Tabs>
 </div>
 );
};

export default StaffLMS;