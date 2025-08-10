import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to you
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID_TO_ME',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      );

      // Send auto-reply to them
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID_AUTO_REPLY',
        {
          to_name: formData.name,
          to_email: formData.email
        },
        'D5R2VfqejWwUukYP2'
      );

      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'ayush.arya.11062004@gmail.com',
      link: 'mailto:ayush.arya.11062004@gmail.com'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Patna | Vellore',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      url: 'https://github.com/Healreaper2004 '
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      url: 'http://linkedin.com/in/ayush-arya-9b3406255'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter',
      url: 'https://twitter.com/HealReaper'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-card hover:bg-primary/20 border-primary/30 py-3"
                  variant="outline"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left">
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Let's work together!
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just connecting with fellow developers. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
