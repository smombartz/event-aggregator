'use client';

import Link from "next/link";
import Button from "@/components/ui/Button";
import { useAuth } from "@/components/AuthProvider";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Event Aggregator
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and track events from across the web. Add event URLs, extract structured data with AI, and organize your events in one place.
        </p>
        
        {user ? (
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Welcome back, {user.displayName || user.email}!
            </p>
            <Link href="/dashboard">
              <Button size="lg">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-gray-700">
              Sign in to start aggregating your events
            </p>
            <Link href="/login">
              <Button size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
