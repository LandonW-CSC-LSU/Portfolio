import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactInfo } from '../../models/contact-info';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactInfo: ContactInfo = {
    email: 'landonwalls04@gmail.com',
    phone: '+1 (225) 380-7634',
    linkedin: 'https://www.linkedin.com/in/landon-walls-932792245/',
    github: 'https://github.com/LandonW-CSC-LSU',
    location: 'Baton Rouge, Louisiana'
  };

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;

    try {
      const formData = new FormData();
      formData.append('name', this.contactForm.name);
      formData.append('_replyto', this.contactForm.email);
      formData.append('subject', this.contactForm.subject);
      formData.append('message', this.contactForm.message);
      formData.append('_subject', `New message from portfolio: ${this.contactForm.subject}`);

      const response = await fetch('https://formspree.io/f/mgvnvwav', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        this.contactForm = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at landonwalls04@gmail.com');
    } finally {
      this.isSubmitting = false;
    }
  }
}
