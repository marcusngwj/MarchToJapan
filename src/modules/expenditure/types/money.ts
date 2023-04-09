export type Money = number;

export type Cashback = {
  uobAbsoluteCard: Money;
  shopback: Money;
  agoda: Money;
};

export type Expenditure = {
  flight: Money
  accommodation: Money
  insurance: Money
  travel: Money
  food: Money
  entertainment: Money
  others: Money
}