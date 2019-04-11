const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel');

describe('hobbitsModel', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	afterEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert', () => {
		it('insert hobbits into db', async () => {
			const newHobbit = await Hobbits.insert({ name: 'Pippin' });
			expect(newHobbit.name).toBe('Pippin');
		});
		it('if insert two hobbits, two records in db', async () => {
			const newHobbit1 = await Hobbits.insert({ name: 'Pippin' });
			const newHobbit2 = await Hobbits.insert({ name: 'Sam' });
			const allOfThem = await db('hobbits');
			expect(allOfThem).toHaveLength(2);
		});
	});

	describe('delete', () => {
		it('deletes hobbits correctly', async () => {
			const hobbitOne = await Hobbits.insert({ name: 'Pippin' });
			const hobbitTwo = await Hobbits.insert({ name: 'Sam' });
			const hobbitThree = await Hobbits.insert({ name: 'Belba' });
			const deletedHobbit = await Hobbits.remove(1);
			// Removes returns 1 or 0
			expect(deletedHobbit).toBeTruthy();
			// OR
			const allOfThem = await db('hobbits');
			expect(allOfThem).toHaveLength(2);
		});
	});
});
