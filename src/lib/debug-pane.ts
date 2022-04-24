import { Pane } from 'tweakpane';
import * as EssentialsPlugin from '@tweakpane/plugin-essentials';
import { FPSGraph } from './types';

// Debug
export const debugPane = new Pane();
debugPane.registerPlugin(EssentialsPlugin);

export const fpsGraph = debugPane.addBlade({
	view: 'fpsgraph',
	label: 'fpsgraph',
}) as FPSGraph;
