import React from 'react';
import LegalLayout from './LegalLayout';
import { Shield, Lock, Eye, Server, Globe, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
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

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="December 5, 2025" onBack={onBack}>

            <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
                <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                    AI-First Privacy Commitment
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm">
                    We treat your data with the highest level of security. As an AI agency, we strictly ensure that <span className="text-white font-medium">your proprietary data is never used to train public models</span> without your explicit written consent.
                </p>
            </div>

            <Section title="1. Introduction" icon={<FileText className="w-6 h-6" />}>
                <p>
                    Welcome to Automatix ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our <Highlight>AI automation services</Highlight>.
                </p>
            </Section>

            <Section title="2. Information We Collect" icon={<Eye className="w-6 h-6" />}>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 marker:text-orange-500 text-sm sm:text-base">
                    <li><strong>Personal Identification:</strong> Name, email address, phone number.</li>
                    <li><strong>Business Intelligence:</strong> Company name, industry, workflow requirements.</li>
                    <li><strong>Training Data:</strong> Data required for AI model training and fine-tuning (as explicitly agreed upon).</li>
                    <li><strong>Credentials:</strong> API keys and access tokens necessary for integrating automation services.</li>
                </ul>
            </Section>

            <Section title="3. AI Data Processing & Security" icon={<Server className="w-6 h-6" />}>
                <p>
                    As an AI Automation Agency, we utilize advanced <Highlight>Large Language Models (LLMs)</Highlight> and automation tools to deliver our services. Here is how we handle data in this context:
                </p>
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <div className="bg-white/5 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors">
                        <h5 className="text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">Data Isolation</h5>
                        <p className="text-xs sm:text-sm">Client data is processed in isolated environments. We do not use your proprietary data to train public foundation models.</p>
                    </div>
                    <div className="bg-white/5 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 hover:border-orange-500/30 transition-colors">
                        <h5 className="text-white font-bold mb-1 sm:mb-2 text-sm sm:text-base">Trusted Providers</h5>
                        <p className="text-xs sm:text-sm">We partner with enterprise-grade providers (OpenAI, Anthropic) selected for their strict security standards (SOC2, GDPR).</p>
                    </div>
                </div>
            </Section>

            <Section title="4. How We Use Your Information" icon={<Globe className="w-6 h-6" />}>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 marker:text-orange-500 text-sm sm:text-base">
                    <li>Design, build, and maintain custom <Highlight>AI automation workflows</Highlight>.</li>
                    <li>Communicate with you regarding project updates and support.</li>
                    <li>Improve our internal AI agents and service delivery mechanisms.</li>
                    <li>Process payments and manage your account.</li>
                </ul>
            </Section>

            <Section title="5. Disclosure of Your Information" icon={<Lock className="w-6 h-6" />}>
                <p>
                    We do not sell, trade, or otherwise transfer your personal information to outside parties, except as described below:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2 marker:text-orange-500 text-sm sm:text-base">
                    <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors who assist us in operating our website and conducting our business.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                </ul>
            </Section>

            <div className="border-t border-white/10 pt-8 mt-12">
                <p className="text-gray-500 text-sm text-center">
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@automatix.com" className="text-orange-400 hover:text-white transition-colors">hello@automatix.com</a>.
                </p>
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
