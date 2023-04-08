import { Money } from "./money"

export type Expenditure = {
  flight: Money
  accommodation: Money
  insurance: Money
  travel: Money
  food: Money
  entertainment: Money
  others: Money
}