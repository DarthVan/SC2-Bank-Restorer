/* Generated with TypeScript snippets */

import { Text } from '@src/components/ui';
import { lazy, Suspense } from 'react';

/* import AnySimple from './any-simple';
import MineralzEvolution from './mineralz-evolution';
import RunlingRun4 from './runling-run-4';
import RunlingRun8ilovePie from './runling-run-8/i-love-pie';
import RunlingRun8Prestige from './runling-run-8/prestige';
import SwarmSpecialForces from './swarm-special-forces';
import ZombieCity from './zombie-city';
import ZombieWorldLiberty from './zombie-world-liberty';
import ZombieWorldUnity from './zombie-world-unity'; */

const AnySimple = lazy(() => import('./any-simple'));
const MineralzEvolution = lazy(() => import('./mineralz-evolution'));
const RunlingRun4 = lazy(() => import('./runling-run-4'));
const RunlingRun8ilovePie = lazy(() => import('./runling-run-8/i-love-pie'));
const RunlingRun8Prestige = lazy(() => import('./runling-run-8/prestige'));
const SwarmSpecialForces = lazy(() => import('./swarm-special-forces'));
const ZombieCity = lazy(() => import('./zombie-city'));
const ZombieWorldLiberty = lazy(() => import('./zombie-world-liberty'));
const ZombieWorldUnity = lazy(() => import('./zombie-world-unity'));

/** Maps **
* ...
* @Author Star Noob
* @Created 2022-10-24
*/

export enum Maps {

	NONE,
	ANY_SIMPLE,
	MINERALZ_EVOLUTION,
	RUNLING_RUN_4,
	RUNLING_RUN_8,
	SWARM_SCPECIAL_FORCES,
	ZOMBIE_CITY,
	ZOMBIE_WORLD_LIBERTY,
	ZOMBIE_WORLD_UNITY,

}

const loading: JSX.Element = <Text style={{ display: 'block', fontSize: '60px', margin: '40px 60px', fontWeight: 'bold', color: '#CCCCFF77' }}>Loading...</Text>;

const wait: (children: JSX.Element) => JSX.Element = (children: JSX.Element): JSX.Element => {
	return <Suspense fallback={loading}>{children}</Suspense>;
}

export const mapProps: Map<number, { title: string, authorID: string, forms: JSX.Element[] }> =
	new Map<number, { title: string, authorID: string, forms: JSX.Element[] }>([

		[Maps.NONE, {
			title: 'None',
			authorID: '',
			forms: [<Text style={{ display: 'block', fontSize: '60px', margin: '40px 60px', fontWeight: 'bold', color: '#CCCCFF77' }}>Select map</Text>]
		}],

		[Maps.ANY_SIMPLE, {
			title: 'Any Simple Map',
			authorID: '',
			forms: [wait(<AnySimple />)]
		}],

		[Maps.MINERALZ_EVOLUTION, {
			title: 'MineralZ Evolution',
			authorID: '2-S2-1-4620835',
			forms: [wait(<MineralzEvolution bankName='Banks' />)]
		}],

		[Maps.RUNLING_RUN_4, {
			title: 'Runling Run 4',
			authorID: '2-S2-1-3564862',
			forms: [wait(<RunlingRun4 bankName='RunlingRun004' />)]
		}],

		[Maps.RUNLING_RUN_8, {
			title: 'Runling Run 8',
			authorID: '2-S2-1-5734972',
			forms: [wait(<RunlingRun8ilovePie bankName='ILovePie' key={1} />), wait(<RunlingRun8Prestige bankName='Prestige' key={2} />)]
		}],

		[Maps.SWARM_SCPECIAL_FORCES, {
			title: 'Swarm Special Forces',
			authorID: '2-S2-1-1066242',
			forms: [wait(<SwarmSpecialForces bankName='SwarmSpecialForces' />)]
		}],

		[Maps.ZOMBIE_CITY, {
			title: 'Zombie City',
			authorID: '2-S2-1-1687296',
			forms: [wait(<ZombieCity bankName='AMMMAAKDAS39349' />)]
		}],

		[Maps.ZOMBIE_WORLD_LIBERTY, {
			title: 'Zombie World Liberty',
			authorID: '2-S2-1-7593740',
			forms: [wait(<ZombieWorldLiberty bankName='DirectStrike'></ZombieWorldLiberty>)]
		}],

		[Maps.ZOMBIE_WORLD_UNITY, {
			title: 'Zombie World Unity',
			authorID: '2-S2-1-7593740',
			forms: [wait(<ZombieWorldUnity bankName='zombieworldu'></ZombieWorldUnity>)]
		}],

	]);