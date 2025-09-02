import React from "react";
import { industries } from "@/data/industries";
import OnBoardingForm from "./_components/onboarding-form";
import { getUserOnboardingStatus } from '../../../actions/user';
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  // check if user after onboarding
  const { isOnboarded } = await getUserOnboardingStatus();

  if(isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
