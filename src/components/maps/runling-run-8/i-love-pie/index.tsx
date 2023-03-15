/* Generated with TypeScript React snippets */

import { observer } from 'mobx-react-lite';
import React, { CSSProperties, FC, useCallback, useEffect, useMemo, useState } from 'react';
import { flushSync } from "react-dom";
import Checkbox from 'src/components/ui/checkbox';
import Container from 'src/components/ui/container';
import Input from 'src/components/ui/input';
import Select from 'src/components/ui/select';
import { Bank } from 'src/core/bank/bank';
import { SCParam } from 'src/core/scarcode/sc-param';
import { useStore } from 'src/hooks/use-store';
import Editor from 'src/modules/editor';
import { copyTextToClipboard, downloadTextAsFile } from "src/utils/utils";
import { mapProps, Maps } from '../../Maps';
import functions from "./functions";
import store from "./store";

/** RunlingRun8ILovePie **
* ...
* @Author Star Noob
* @Created 2022-11-03
*/

interface Props {
	bankName?: string;
}

const RunlingRun8ILovePie: FC<Props> = observer((props: Props): JSX.Element => {
	const { accountStore, menuStore, mapStore, modalStore } = useStore();
	const [bankName, setBankName] = useState(props.bankName);
	const [authorID, setAuthorID] = useState(mapProps.get(Maps.RUNLING_RUN_8).authorID);
	const mapTitle: string = mapProps.get(Maps.RUNLING_RUN_8).title;

	const bank: Bank = useMemo((): Bank => {
		return new Bank(bankName, authorID, menuStore.playerID, '1');
	}, [accountStore.current, menuStore.playerID, bankName, authorID]);

	const unitSelectorData: { value: string, label: string }[] = useMemo((): { value: string, label: string }[] => {
		return [
			{ value: '0', label: 'Empty' },
			{ value: '1', label: 'Ling' },
			{ value: '2', label: 'Bane' },
			{ value: '3', label: 'Hydra' },
			{ value: '4', label: 'Ultra' },
			{ value: '5', label: 'Roach' },
			{ value: '6', label: 'Impaler' },
			{ value: '7', label: 'Infested' },
			{ value: '8', label: 'Drone' }
		]
	}, []);

	useEffect((): void => {
		const fields: any = mapStore.list[accountStore.current]?.[mapTitle]?.ilovepie;
		if (fields)
			store.fromLocalStorage(fields);
		else
			// TODO: придумать как убрать костыль (синхронно в этом месте не срабоает в первый раз)
			setTimeout(callbacks.onResetClick);
	}, [accountStore.current]);

	const save: () => void = (): void => {
		const prestige: {} = mapStore.list[accountStore.current]?.[mapTitle]?.prestige;
		mapStore.setMapData(accountStore.current, mapTitle, {
			ilovepie: { units: store.units, info: store.info },
			prestige
		});
	};

	const callbacks = {
		onBankNameChange: useCallback((value: string): void => {
			setBankName(value);
		}, []),
		onAuthorIdChange: useCallback((value: string): void => {
			setAuthorID(value);
		}, []),
		onFileDrop: useCallback((name: string, value: string): void => {
			const fields: { info?: SCParam[], units?: SCParam[][] } = functions.parse(bank, value);
			if (!fields)
				return;
			flushSync((): void => store.setFields()); // unmutate
			store.setFields(fields);
		}, []),
		onDownloadClick: useCallback((): void => {
			if (!menuStore.playerID.includes('-S2-')) {
				modalStore.setModal('WARN', 'This map requires a player id to generate valid bank! Use Help for details.');
				return;
			}
			downloadTextAsFile(functions.generateXML(bank), bankName + '.SC2Bank', true);
			if (!menuStore.autoSave)
				save();
		}, [bank]), // зависит от хмля банка
		onCopyCodeClick: useCallback((): void => {
			if (!menuStore.playerID.includes('-S2-')) {
				modalStore.setModal('WARN', 'This map requires a player id to generate valid bank! Use Help for details.');
				return;
			}
			copyTextToClipboard(functions.generateXML(bank), true);
			if (!menuStore.autoSave)
				save();
		}, [bank]), // зависит от хмля банка
		onResetClick: useCallback((): void => {
			setBankName(props.bankName);
			setAuthorID(mapProps.get(Maps.RUNLING_RUN_8).authorID);
			flushSync((): void => store.setFields());
			store.reset();
		}, []),
		onUnitTypeChange: useCallback((value: string, index?: number): void => {
			store.setUnit(index, { type: parseInt(value) }, true);
			if (menuStore.autoSave)
				save();
		}, []),
		onUnitLevelChange: useCallback((value: string, index?: number): void => {
			store.setUnit(index, { level: parseInt(value) }, true);
			if (menuStore.autoSave)
				save();
		}, []),
		onStatChange: useCallback((value: string, index?: number): void => {
			store.updateAt('info', index, parseInt(value), true);
			if (menuStore.autoSave)
				save();
		}, []),
		onSettingChange: useCallback((value: string | boolean, index?: number): void => {
			store.updateAt('info', index, index < 19 ? parseInt(value as string) : (value ? 1 : 0), true);
			if (menuStore.autoSave)
				save();
		}, []),
	};

	const [unitsStyle, unitTypeStlye, unitLevelStyle, statInputStyle] = useMemo((): CSSProperties[] => {
		return [
			{ flexDirection: 'row', padding: '10px' },
			{ width: '90px' },
			{ width: '30px' },
			{ width: '45px' }
		];
	}, []);

	const units: JSX.Element = useMemo((): JSX.Element => {
		return (
			<Container style={{ flexFlow: 'column', padding: '0', justifyContent: 'space-around', border: '1px solid #ffffff40' }}>
				{store.units.map((unit: SCParam[], index: number): JSX.Element => {
					return (
						<Container style={unitsStyle}>
							<Select label={'Slot ' + (index + 1) + ':'}
								index={index}
								style={unitTypeStlye}
								onChange={callbacks.onUnitTypeChange}
								selected={unit[0].current.toString()}
							>{unitSelectorData}</ Select>
							<Input label='Level:' index={index} type='number' min='1'
								style={unitLevelStyle}
								onChange={callbacks.onUnitLevelChange}
								max={'100'}
								placeholder='Level of unit (1-100)'
								value={unit[7].current.toString()}
							/>
						</Container>
					);
				})}
			</Container>
		);
	}, [store.units]);

	const stats: JSX.Element = useMemo((): JSX.Element => {
		return (
			<>
				<Container style={{ flexDirection: 'column', padding: '10px', border: '1px solid #ffffff40' }} alignInputs={true}>
					{store.info.map((param: SCParam, index: number): JSX.Element => {
						if (index != 12 && index < 16)
							return (
								<Input label={param.description + ':'} index={index} type='number' min='0'
									style={statInputStyle}
									onChange={callbacks.onStatChange}
									max={param.max.toString()}
									value={param.current.toString()}
								/>
							);
						else
							return null;
					})}
				</Container>
				<Container style={{ flexDirection: 'column', padding: '10px', border: '1px solid #ffffff40' }} alignInputs={true}>
					{store.info.map((param: SCParam, index: number): JSX.Element => {
						if (index < 16)
							return null;
						if (index < 19)
							return (
								<Input label={param.description + ':'} index={index} type='number' min='1'
									style={statInputStyle}
									onChange={callbacks.onSettingChange}
									max={param.max.toString()}
									value={param.current.toString()}
								/>
							);
						else
							return (
								<Checkbox label={param.description + ':'} index={index}
									onChange={callbacks.onSettingChange}
									value={param.current == 1}
								/>
							);
					})}
				</Container>
			</>
		);
	}, [store.info]);

	const form: JSX.Element = useMemo((): JSX.Element => {
		return (
			<Container style={{ flexDirection: 'row', padding: '0' }}>
				{units}
				{stats}
			</Container>
		);
	}, [store.units, store.info]);

	return (
		<Editor
			bankName={bankName}
			authorID={authorID}
			onBankNameChange={callbacks.onBankNameChange}
			onAuthorIdChange={callbacks.onAuthorIdChange}
			onFileDrop={callbacks.onFileDrop}
			onDownload={callbacks.onDownloadClick}
			onCopy={callbacks.onCopyCodeClick}
			onReset={callbacks.onResetClick}
		>
			{form}
		</Editor>
	);
});

export default React.memo(RunlingRun8ILovePie);