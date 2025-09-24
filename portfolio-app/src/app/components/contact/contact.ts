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
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    location: 'City, Country'
  };

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
