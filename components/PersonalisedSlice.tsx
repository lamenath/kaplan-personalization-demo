import { Personalize } from "@uniformdev/optimize-tracker-react";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";
import * as React from "react";
import SliceResolver from "../sm-resolver";
import { IEnhancedUnknownSlice } from "./UniformSliceZone";

function ComponentMapper(props) {
  const slice = props;
  const SliceComponent = SliceResolver({
    ...slice,
    sliceName: upperFirst(camelCase(slice.slice_type)),
  });

  return <SliceComponent slice={slice} />;
}

export default function PersonalisedSliceAlt({
  slice,
}: {
  slice: IEnhancedUnknownSlice;
}) {
  return (
    <Personalize
      variations={slice.uniformVariations}
      component={ComponentMapper}
    />
  );
}