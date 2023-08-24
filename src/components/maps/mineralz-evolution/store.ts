/* Generated with TypeScript snippets */

import { r } from '@src/utils/utils';
import { makeAutoObservable } from 'mobx';
import { MParam } from '../MParam';

/** Store **
* ...
* @Author Star Noob
* @Created 2023-02-02
*/

class Store {

	public params: MParam[];

	constructor() {
		this.init();
		makeAutoObservable(this);
	}

	//-------------------------------------------------- PUBLIC ---------------------------------------------------

	public setFields(params?: MParam[]): void {
		this.params = params ? [...params] : [];
	}

	// Есть возможность мутации - лучий оптимизон, но не забывать про flushSync с занулением поля в ключевых местах
	public updateAt(index: number, value: number, mutation?: boolean): void {
		if (mutation) {
			this.params[index].value = value;
			return;
		}
		const p: MParam[] = [...this.params];
		p[index].value = value;
		this.params = p;
	}

	public reset(): void {
		this.init();
	}

	//------------------------------------------------- PROTECTED -------------------------------------------------

	private init(): void {
		this.params = [
			{ type: 'number', value: r(1, 40), description: 'Prestige', min: 0, max: 40, tip: '0 - 40' },
			{ type: 'number', value: r(100, 200), description: 'Level', min: 1, max: 200, tip: '1 - 200' },
			{ type: 'number', value: r(50, 100), description: 'Wins', min: 0, max: 999999 },

			{ type: 'number', value: 35, description: 'Nights', min: 0, max: 35, tip: '0 - 35' },
			{ type: 'number', value: 35, description: 'Elite', min: 0, max: 35, tip: '0 - 35' },
			{ type: 'number', value: 35, description: 'Nightmare', min: 0, max: 35, tip: '0 - 35' },
			{ type: 'number', value: 35, description: 'Hell', min: 0, max: 35, tip: '0 - 35' },
			{ type: 'number', value: 35, description: 'Impossible', min: 0, max: 35, tip: '0 - 35' },

			{ type: 'number', value: r(25, 125), description: 'Wall', min: 0, max: 999999 }, // 8
			{ type: 'number', value: r(25, 125), description: 'Cannons', min: 0, max: 999999 },
			{ type: 'number', value: r(25, 125), description: 'Healer', min: 0, max: 999999 },
			{ type: 'number', value: r(25, 125), description: 'Generator', min: 0, max: 999999 },
			{ type: 'number', value: r(25, 125), description: 'Economy', min: 0, max: 999999 }
		];
	}

}

export default new Store();