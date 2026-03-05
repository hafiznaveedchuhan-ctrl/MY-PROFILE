'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ContactFormData } from '@/types';
import { profile } from '@/data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    try {
      // Try to send via API first
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        reset();
      } else {
        // Fallback to mailto if API fails
        handleMailtoFallback(data);
      }
    } catch (error) {
      // Fallback to mailto on any error
      handleMailtoFallback(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = (data: ContactFormInputs) => {
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    toast.info('Opening your email client...');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-gray-300 mb-2 block">
          Name
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your name"
          className="bg-white/5 border-white/10 text-white placeholder-gray-500"
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-gray-300 mb-2 block">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
          className="bg-white/5 border-white/10 text-white placeholder-gray-500"
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <Label htmlFor="subject" className="text-gray-300 mb-2 block">
          Subject
        </Label>
        <Input
          id="subject"
          {...register('subject')}
          placeholder="Project collaboration"
          className="bg-white/5 border-white/10 text-white placeholder-gray-500"
        />
        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-gray-300 mb-2 block">
          Message
        </Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell me about your project..."
          rows={5}
          className="bg-white/5 border-white/10 text-white placeholder-gray-500"
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/30 rounded-lg py-3 font-medium transition-all duration-300"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Messages are sent via email. No spam, I promise!
      </p>
    </form>
  );
};
