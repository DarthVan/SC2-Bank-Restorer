/* Generated with TypeScript React snippets */

import { observer } from 'mobx-react-lite';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Button from 'src/components/ui/button';
import Container from 'src/components/ui/container';
import { useStore } from 'src/hooks/use-store';
import { gaEvent } from 'src/utils/ga4';
import { r } from "src/utils/utils";

/** AudioLoop **
* ...
* @Author Star Noob
* @Created 2023-03-10
*/

interface Props { }

const AudioLoop: FC<Props> = observer((props: Props): JSX.Element => {
	const { menuStore } = useStore();
	const audio: HTMLAudioElement = new Audio();
	const interactionType: string = 'mousedown';
	let volumeInterval: number = 0;

	audio.volume = 0;
	if (menuStore.sounds)
		audio.autoplay = true;

	const nextTrack: () => void = (function (): () => void {
		const soundPath: string = 'assets/sound/';
		const playlist: string[] = [
			'Motherchip & Malmen - A Thousand Sunflowers.mp3',
			'ko0x - Galaxy Guppy.mp3',
			'DDRKirby(ISQ) - Starlight Festival.mp3',
			'Toni Leys - Through A Cardboard World.mp3',
			'laamaa - nuri brut.mp3',
			'Funky Fish - Shadow of my Angel.mp3',
			'Vince Kaichan - the Zubmarine Zone.mp3'
		]; // 𝄞
		let index: number = r(0, playlist.length - 1);
		return (): void => {
			audio.src = soundPath + playlist[index];
			audio.title = playlist[index];
			index = index < playlist.length - 1 ? ++index : 0;
		};
	}());

	const volumeUp: () => void = (): void => {
		if (audio.volume > 0 || volumeInterval)
			return;

		volumeInterval = window.setInterval((): void => {
			audio.volume += 0.05;
			if (audio.volume > 0.80)
				window.clearInterval(volumeInterval);
		}, 500);
	};

	const onInteraction: () => void = (): void => {
		setTimeout((): void => {
			if (menuStore.sounds) {
				audio.play();
				volumeUp();
			} else
				audio.pause();
		}, 500);
		window.removeEventListener(interactionType, onInteraction);
	};

	const onTrackEnded: () => void = (): void => {
		gaEvent("Audio", "Track Ended", audio.title);
		nextTrack();
		audio.play();
	};

	const callbacks = {
		onButtonClick: useCallback((): void => {
			if (menuStore.sounds) {
				audio.pause();
				gaEvent("Audio", "Sound OFF", audio.title);
			} else {
				audio.play();
				volumeUp();
				gaEvent("Audio", "Sound ON", audio.title);
			}
			menuStore.setSounds(!menuStore.sounds);
		}, [])
	};

	useEffect((): () => void => {
		audio.addEventListener('ended', onTrackEnded);
		window.addEventListener(interactionType, onInteraction);

		nextTrack();
		return (): void => {
			audio.removeEventListener('ended', onTrackEnded);
			window.removeEventListener(interactionType, onInteraction);
			window.clearInterval(volumeInterval);
		}
	}, []);

	return (
		<Container style={{ width: '30px', height: '23px', padding: '0' }}>
			<Button
				onClick={callbacks.onButtonClick}
				style={{ width: '30px', color: menuStore.sounds ? '#FFFFFF' : '#FF0000' }}
			>♫♪</Button>
		</Container>
	);
});

export default React.memo(AudioLoop);