import { Inject, Injectable } from "@nestjs/common";
import { FeedbacksOrders } from "./models/feedbacks-order.model";
import { FeedbacksProducts } from "./models/feedbacks-product.model";

@Injectable()
export class FeedbacksService {
    constructor(
        @Inject('FEEDBACKS_ORDERS_REPOSITORY') private feedbacksOrdersRepo: typeof FeedbacksOrders,
        @Inject('FEEDBACKS_PRODUCTS_REPOSITORY') private feedbacksProductsRepo: typeof FeedbacksProducts
    ) {}
}