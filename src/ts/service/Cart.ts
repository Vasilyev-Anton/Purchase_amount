import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get TotalCost(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    TotalCostWithDiscount(discount = 0): number {
        const totalCost = this.TotalCost;
        return totalCost - totalCost * discount;
    }

    removeById(id: number): void {
        const initialLength = this._items.length;
        this._items = this._items.filter(item => item.id !== id);
    
        if (initialLength === this._items.length) {
          throw new Error("invalid id");
        }
    }
}
