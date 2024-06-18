import { BaseEntity } from "@medusajs/medusa";
export declare class OnboardingState extends BaseEntity {
    current_step: string;
    is_complete: boolean;
    product_id: string;
}
