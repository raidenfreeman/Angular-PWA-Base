import { CardType } from "./card-type";

export class CreditCard {
  id: string;
  /**
   * A way to identify the card
   *
   * @type {string}
   * @memberof CreditCard
   */
  name: string;
  /**
   * An optional description for the card
   *
   * @type {string}
   * @memberof CreditCard
   */
  description: string;
  /**
   * The name of the issuing bank
   *
   * @type {string}
   * @memberof CreditCard
   */
  issuingOrganization?: string;
  /**
   * The % commission held for every transaction
   *
   * @type {number}
   * @memberof CreditCard
   */
  commissionPercentage: number;
  /**
   * The fixed amount withheld per transaction
   *
   * @type {number}
   * @memberof CreditCard
   */
  commissionFixed: number;
  /**
   * Visa, MasterCard, etc
   *
   * @type {CardType}
   * @memberof CreditCard
   */
  type: string;
}
