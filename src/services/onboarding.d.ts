import { TransactionBaseService } from "@medusajs/medusa";
import OnboardingRepository from "../repositories/onboarding";
import { OnboardingState } from "../models/onboarding";
import { EntityManager } from "typeorm";
import { UpdateOnboardingStateInput } from "../types/onboarding";
type InjectedDependencies = {
    manager: EntityManager;
    onboardingRepository: typeof OnboardingRepository;
};
declare class OnboardingService extends TransactionBaseService {
    protected onboardingRepository_: typeof OnboardingRepository;
    constructor({ onboardingRepository }: InjectedDependencies);
    retrieve(): Promise<OnboardingState | undefined>;
    update(data: UpdateOnboardingStateInput): Promise<OnboardingState>;
}
export default OnboardingService;
