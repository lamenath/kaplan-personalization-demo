import * as React from "react";
import PersonalisedSlice from "./PersonalisedSlice";
import { flatten, groupBy, uniqueId } from "lodash";
import { IntentTagVector } from "@uniformdev/optimize-common";
import { PersonalizableListItem } from "@uniformdev/optimize-tracker-common";
import resolver from "../sm-resolver.js";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

export type TUnknownSlice = {
  primary: {
    intent?: { id: string; [_key: string]: unknown };
    personalisationid?: string;
    [_key: string]: unknown;
  };
  items: Record<string, unknown>[];
  slice_label: string | null;
  slice_type: string;
  variation: string;
};

export interface IEnhancedUnknownSlice extends TUnknownSlice {
  uniformVariations: IEnhancedUnknownSlice[];
  intentTag: { intents: IntentTagVector } | undefined;
  key?: string;
}

export default function UniformSliceZone({
  data,
}: {
  data: { [_key: string]: TUnknownSlice[] };
}) {
  const { slices: defaultSlices = [], ...variationSliceBodies } = data;

  const variationSlices = flatten(Object.values(variationSliceBodies)).map(
    (slice) => ({
      ...slice,
      intentTag: { intents: slice.primary.intent || null },
    })
  );

  const defaultSlicesClean = defaultSlices.map((slice) => ({
    ...slice,
    primary: {
      ...slice.primary,
      personalisationid : slice.primary.personalisationid || uniqueId()
    }
  }));

  const groupedSlices = groupBy(
    [
      ...defaultSlicesClean.map((s) => ({ ...s, intentTag: undefined })),
      ...variationSlices,
    ],
    "primary.personalisationid"
  );

  const slices = defaultSlicesClean.map((slice) => ({
    ...slice,
    key: uniqueId(),
    uniformVariations: groupedSlices[slice.primary.personalisationid],
    intentTag: undefined,
  })) as unknown as IEnhancedUnknownSlice[];

  function ComponentMapper(props) {
    const slice = props;
    const SliceComponent = resolver({
      ...slice,
      sliceName: upperFirst(camelCase(slice.slice_type)),
    });
    const key = props.key;
  
    return <SliceComponent key={key} slice={slice} />;
  }

  return (
    <>
      {slices.map((slice) => (
        (() => {
          if(slice.uniformVariations.length>1){
            return <PersonalisedSlice key={slice.key} slice={slice} />
          }
          else{
            return ComponentMapper(slice)
          }
        })()
      ))}
    </>
  );
}