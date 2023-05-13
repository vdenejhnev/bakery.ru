import { Inject, Injectable } from "@nestjs/common";
import { FeedbackProduct } from "./models/feedbacks-product.model";
import { FeedbackOrder } from "./models/feedbacks-order.model";

@Injectable()
export class FeedbacksService {
    constructor(
        @Inject('FEEDBACKS_ORDERS_REPOSITORY') private feedbacksOrdersRepo: typeof FeedbackOrder,
        @Inject('FEEDBACKS_PRODUCTS_REPOSITORY') private feedbacksProductsRepo: typeof FeedbackProduct
    ) {}
}