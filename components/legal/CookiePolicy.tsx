import React from 'react';
import LegalLayout from './LegalLayout';
import { Cookie, Settings, BarChart, Globe, Info } from 'lucide-react';

interface CookiePolicyProps {
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

const CookieCard: React.FC<{ title: string; type: string; description: string }> = ({ title, type, description }) => (
    <div className="bg-white/5 border border-white/5 rounded-lg sm:rounded-xl p-3 sm:p-5 hover:border-orange-500/30 transition-all group/card">
        <div className="flex justify-between items-start gap-2 mb-2">
            <h4 className="text-sm sm:text-base text-white font-bold group-hover/card:text-orange-400 transition-colors">{title}</h4>
            <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-400 uppercase flex-shrink-0">{type}</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-400">{description}</p>
    </div>
);

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="December 5, 2025" onBack={onBack}>

            <Section title="1. What Are Cookies?" icon={<Cookie className="w-6 h-6" />}>
                <p>
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                </p>
            </Section>

            <Section title="2. How We Use Cookies" icon={<Settings className="w-6 h-6" />}>
                <p className="mb-6">
                    Automatix uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. We use the following types of cookies:
                </p>

                <div className="grid gap-4">
                    <CookieCard
                        title="Essential Cookies"
                        type="Necessary"
                        description="These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas."
                    />
                    <CookieCard
                        title="Analytics Cookies"
                        type="Statistics"
                        description="These help us understand how visitors interact with our website by collecting and reporting information anonymously."
                    />
                    <CookieCard
                        title="Functionality Cookies"
                        type="Preferences"
                        description="These allow the website to remember choices you make (such as your language or the region you are in) and provide enhanced features."
                    />
                    <CookieCard
                        title="Marketing Cookies"
                        type="Marketing"
                        description="These are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user."
                    />
                </div>
            </Section>

            <Section title="3. Third-Party Cookies" icon={<Globe className="w-6 h-6" />}>
                <p>
                    In some cases, we may use trusted third-party services (such as Google Analytics or LinkedIn Insights) that may also set cookies on your device. We do not control the dissemination of these cookies and you should check the relevant third-party website for more information.
                </p>
            </Section>

            <Section title="4. Managing Your Preferences" icon={<Info className="w-6 h-6" />}>
                <p>
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
            </Section>

            <div className="border-t border-white/10 pt-6 sm:pt-8 mt-8 sm:mt-12">
                <p className="text-gray-500 text-xs sm:text-sm text-center">
                    Questions about cookies? Contact us at <a href="mailto:hello@automatix.com" className="text-orange-400 hover:text-white transition-colors">hello@automatix.com</a>.
                </p>
            </div>
        </LegalLayout>
    );
};

export default CookiePolicy;
