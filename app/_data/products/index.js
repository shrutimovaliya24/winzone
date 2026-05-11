// Central source of truth for all Winzon System product detail pages.
// All body copy in each product file is supplied verbatim by the SEO team.
// Do NOT edit wording inside individual product files without SEO team approval.
//
// Adding a new product:
//   1. Drop a new <slug>.js next to this file (export default { ...productSchema }).
//   2. Add it to `productList` below.
//   3. The sitemap, header, footer, and individual page route are all data-driven —
//      a one-line addition wires it everywhere.

import slimestWindow from "./slimest-window";
import indiasBestSlimWindow from "./indias-best-slim-window";
import minimalistSystemWindow from "./minimalist-system-window";
import minimalSlimWindow from "./minimal-slim-window";
import hybridSlimSystem from "./hybrid-slim-system";
import slimSlidingSystem from "./slim-sliding-system";
import slimCasementSystem from "./slim-casement-system";
import slimMinimalSystem from "./slim-minimal-system";
import slimMinimalConcealedWindow from "./slim-minimal-concealed-window";
import slimHybridMinimalSystem from "./slim-hybrid-minimal-system";
import aluminiumSlidingWindow from "./aluminium-sliding-window";
import aluminiumMinimalWindow from "./aluminium-minimal-window";
import aluminiumSlimWindow from "./aluminium-slim-window";
import casementWindow from "./casement-window";
import biFoldDoorSystem from "./bi-fold-door-system";
import aluminiumDoorSystem from "./aluminium-door-system";
import slidingFoldingSystem from "./sliding-folding-system";
import telescopicPartitionSystem from "./telescopic-partition-system";
import synchronisedPartitionSystem from "./synchronised-partition-system";
import aluminiumWindowDoorSystem from "./aluminium-window-door-system";
import slimPartitionSystem from "./slim-partition-system";
import minimalPartitionSystem from "./minimal-partition-system";
import slimOpenableWindow from "./slim-openable-window";

export const products = [
  slimestWindow,
  indiasBestSlimWindow,
  minimalistSystemWindow,
  minimalSlimWindow,
  hybridSlimSystem,
  slimSlidingSystem,
  slimCasementSystem,
  slimMinimalSystem,
  slimMinimalConcealedWindow,
  slimHybridMinimalSystem,
  aluminiumSlidingWindow,
  aluminiumMinimalWindow,
  aluminiumSlimWindow,
  casementWindow,
  biFoldDoorSystem,
  aluminiumDoorSystem,
  slidingFoldingSystem,
  telescopicPartitionSystem,
  synchronisedPartitionSystem,
  aluminiumWindowDoorSystem,
  slimPartitionSystem,
  minimalPartitionSystem,
  slimOpenableWindow,
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getOtherProducts(slug, limit = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}

export function getRelatedProducts(slug, limit = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  // Prefer same category, then fall back to others.
  const sameCategory = products.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const otherCategory = products.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...otherCategory].slice(0, limit);
}
