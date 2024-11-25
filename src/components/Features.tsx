import React from 'react';
import { Cloud, Shield, HardDrive } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-16">
      <FeatureCard
        icon={<Cloud className="w-8 h-8 text-blue-600" />}
        title="Cloud Storage"
        description="Get 2TB of secure cloud storage for all your files"
      />
      <FeatureCard
        icon={<Shield className="w-8 h-8 text-green-600" />}
        title="Enhanced Security"
        description="Advanced security features to protect your data"
      />
      <FeatureCard
        icon={<HardDrive className="w-8 h-8 text-purple-600" />}
        title="Automatic Backup"
        description="Keep your files safe with automatic backup"
      />
    </div>
  );
}