import { BladeController, View } from "@tweakpane/core";
import { BladeApi } from "tweakpane";

export interface FPSGraph extends BladeApi<BladeController<View>> {
	begin(): void;
	end(): void;
}