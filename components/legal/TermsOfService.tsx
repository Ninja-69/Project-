import React from 'react';
import LegalLayout from './LegalLayout';
import { Scale, AlertTriangle, FileCheck, Copyright, Zap, DollarSign } from 'lucide-react';

interface TermsOfServiceProps {
    onBack: () => void;
}

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="group">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 text-orange-400 group-hover:bg-orange-500/10 group-hover:text-orange-300 transition-colors flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="pl-8 sm:pl-12 text-gray-400 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
            {children}
        </div>
    </div>
);

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-white font-medium bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
        {children}
    </span>
);

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="December 5, 2025" onBack={onBack}>

            <div className="bg-red-500/5 border border-red-500/20 rounded-lg sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
                <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Critical AI Disclaimer
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm">
                    Our services involve the use of Artificial Intelligence. You acknowledge that AI is probabilistic and may occasionally produce <span className="text-white font-medium">"hallucinations"</span> or errors. Human review is required.
                </p>
            </div>

            <Section title="1. Acceptance of Terms" icon={<FileCheck className="w-6 h-6" />}>
                <p>
                    By accessing or using the services provided by Automatix ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
            </Section>

            <Section title="2. Description of Services" icon={<Zap className="w-6 h-6" />}>
                <p>
                    Automatix provides <Highlight>AI automation consulting</Highlight>, development, and maintenance services. This includes building custom workflows, integrating AI agents, and optimizing business processes using third-party tools and APIs.
                </p>
            </Section>

            <Section title="3. Intellectual Property Rights" icon={<Copyright className="w-6 h-6" />}>
                <div className="grid gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold mb-1">Client IP</h5>
                        <p className="text-sm">You retain all rights, title, and interest in your pre-existing data, branding, and intellectual property.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold mb-1">Deliverables</h5>
                        <p className="text-sm">Upon full payment, you own the specific automation workflows and configurations created for you.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h5 className="text-white font-bold mb-1">Background IP</h5>
                        <p className="text-sm">We retain ownership of our pre-existing code, libraries, and reusable AI agent templates. We grant you a perpetual license to use them.</p>
                    </div>
                </div>
            </Section>

            <Section title="4. Limitation of Liability" icon={<Scale className="w-6 h-6" />}>
                <p>
                    You acknowledge that our services involve the use of Artificial Intelligence, which is probabilistic in nature.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 marker:text-orange-500 text-sm sm:text-base">
                    <li><strong>Accuracy:</strong> We do not guarantee that AI-generated outputs will be 100% accurate, complete, or error-free.</li>
                    <li><strong>Verification:</strong> You are responsible for reviewing and verifying AI-generated content before use.</li>
                    <li><strong>Third-Party Availability:</strong> We are not responsible for service interruptions caused by third-party API providers (e.g., OpenAI downtime).</li>
                </ul>
            </Section>

            <Section title="5. Payment Terms" icon={<DollarSign className="w-6 h-6" />}>
                <p>
                    Services are billed according to the specific proposal or subscription plan agreed upon. Invoices are due upon receipt unless otherwise specified. We reserve the right to suspend services for late payments.
                </p>
            </Section>

            <div className="border-t border-white/10 pt-8 mt-12">
                <p className="text-gray-500 text-sm text-center">
                    Questions about our terms? Contact us at <a href="mailto:hello@automatix.com" className="text-orange-400 hover:text-white transition-colors">hello@automatix.com</a>.
                </p>
            </div>
        </LegalLayout>
    );
};

export default TermsOfService;
