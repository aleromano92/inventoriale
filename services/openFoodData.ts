import axios, { AxiosResponse } from 'axios';
import { Tracing } from 'trace_events';

export interface OpenFoodDataResponse {
  code: string;
  product: Product;
  status: number;
  status_verbose: string;
}
export interface Product {
  _id: string;
  _keywords?: string[] | null;
  added_countries_tags?: null[] | null;
  additives_debug_tags?: string[] | null;
  additives_n: number;
  additives_old_n: number;
  additives_old_tags?: string[] | null;
  additives_original_tags?: string[] | null;
  additives_prev_original_tags?: string[] | null;
  additives_tags?: string[] | null;
  allergens: string;
  allergens_debug_tags?: null[] | null;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy?: string[] | null;
  allergens_tags?: string[] | null;
  amino_acids_prev_tags?: null[] | null;
  amino_acids_tags?: null[] | null;
  brands: string;
  brands_tags?: string[] | null;
  categories: string;
  categories_hierarchy?: string[] | null;
  categories_lc: string;
  categories_old: string;
  categories_properties: ThreatenedSpeciesOrCategoriesPropertiesOrCategoryProperties;
  categories_properties_tags?: string[] | null;
  categories_tags?: string[] | null;
  category_properties: ThreatenedSpeciesOrCategoriesPropertiesOrCategoryProperties;
  checkers_tags?: null[] | null;
  ciqual_food_name_tags?: string[] | null;
  cities_tags?: null[] | null;
  code: string;
  codes_tags?: string[] | null;
  compared_to_category: string;
  complete: number;
  completeness: number;
  correctors_tags?: string[] | null;
  countries: string;
  countries_beforescanbot: string;
  countries_debug_tags?: null[] | null;
  countries_hierarchy?: string[] | null;
  countries_lc: string;
  countries_tags?: string[] | null;
  created_t: number;
  creator: string;
  data_quality_bugs_tags?: null[] | null;
  data_quality_errors_tags?: null[] | null;
  data_quality_info_tags?: string[] | null;
  data_quality_tags?: string[] | null;
  data_quality_warnings_tags?: string[] | null;
  data_sources: string;
  data_sources_tags?: string[] | null;
  debug_param_sorted_langs?: string[] | null;
  ecoscore_data: EcoscoreData;
  ecoscore_grade: string;
  ecoscore_tags?: string[] | null;
  editors_tags?: string[] | null;
  emb_codes: string;
  emb_codes_20141016: string;
  emb_codes_debug_tags?: null[] | null;
  emb_codes_orig: string;
  emb_codes_tags?: null[] | null;
  entry_dates_tags?: string[] | null;
  expiration_date: string;
  expiration_date_debug_tags?: null[] | null;
  generic_name: string;
  generic_name_en: string;
  generic_name_en_debug_tags?: null[] | null;
  generic_name_fr: string;
  generic_name_fr_debug_tags?: null[] | null;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers_tags?: string[] | null;
  ingredients?: IngredientsEntity[] | null;
  ingredients_analysis_tags?: string[] | null;
  ingredients_debug?: (string | null)[] | null;
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags?: null[] | null;
  ingredients_hierarchy?: string[] | null;
  ingredients_ids_debug?: string[] | null;
  ingredients_n: number;
  ingredients_n_tags?: string[] | null;
  ingredients_original_tags?: string[] | null;
  ingredients_percent_analysis: number;
  ingredients_tags?: string[] | null;
  ingredients_text: string;
  ingredients_text_debug: string;
  ingredients_text_debug_tags?: null[] | null;
  ingredients_text_en: string;
  ingredients_text_fr: string;
  ingredients_text_fr_debug_tags?: null[] | null;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_en: string;
  ingredients_text_with_allergens_fr: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags?: null[] | null;
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy?: null[] | null;
  labels_lc: string;
  labels_prev_hierarchy?: null[] | null;
  labels_prev_tags?: null[] | null;
  labels_tags?: null[] | null;
  lang: string;
  languages: Map<string, number>;
  languages_codes: LanguagesCodes;
  languages_hierarchy?: string[] | null;
  languages_tags?: string[] | null;
  last_edit_dates_tags?: string[] | null;
  last_editor: string;
  last_image_dates_tags?: string[] | null;
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  lc: string;
  link: string;
  link_debug_tags?: null[] | null;
  main_countries_tags?: null[] | null;
  manufacturing_places: string;
  manufacturing_places_debug_tags?: null[] | null;
  manufacturing_places_tags?: null[] | null;
  max_imgid: string;
  minerals_prev_tags?: null[] | null;
  minerals_tags?: null[] | null;
  misc_tags?: string[] | null;
  no_nutrition_data: string;
  nova_group: number;
  nova_group_debug: string;
  nova_groups: string;
  nova_groups_tags?: string[] | null;
  nucleotides_prev_tags?: null[] | null;
  nucleotides_tags?: null[] | null;
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags?: string[] | null;
  nutriments: Nutriments;
  nutriscore_data: NutriscoreData;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_per_debug_tags?: null[] | null;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_data_prepared_per_debug_tags?: null[] | null;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags?: string[] | null;
  nutrition_score_beverage: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  nutrition_score_warning_no_fiber: number;
  origins: string;
  origins_hierarchy?: null[] | null;
  origins_lc: string;
  origins_old: string;
  origins_tags?: null[] | null;
  other_nutritional_substances_tags?: null[] | null;
  packaging: string;
  packaging_debug_tags?: null[] | null;
  packaging_tags?: string[] | null;
  packagings?: PackagingsEntity[] | null;
  photographers_tags?: string[] | null;
  pnns_groups_1: string;
  pnns_groups_1_tags?: string[] | null;
  pnns_groups_2: string;
  pnns_groups_2_tags?: string[] | null;
  popularity_key: number;
  popularity_tags?: string[] | null;
  product_name: string;
  product_name_en: string;
  product_name_en_debug_tags?: null[] | null;
  product_name_fr: string;
  product_name_fr_debug_tags?: null[] | null;
  product_quantity: string;
  purchase_places: string;
  purchase_places_debug_tags?: null[] | null;
  purchase_places_tags?: string[] | null;
  quantity: string;
  quantity_debug_tags?: null[] | null;
  removed_countries_tags?: null[] | null;
  rev: number;
  scans_n: number;
  selected_images: SelectedImages;
  serving_quantity: string;
  serving_size: string;
  serving_size_debug_tags?: null[] | null;
  sortkey: number;
  states: string;
  states_hierarchy?: string[] | null;
  states_tags?: string[] | null;
  stores: string;
  stores_debug_tags?: null[] | null;
  stores_tags?: null[] | null;
  traces: string;
  traces_debug_tags?: null[] | null;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy?: string[] | null;
  traces_tags?: string[] | null;
  unique_scans_n: number;
  unknown_ingredients_n: number;
  unknown_nutrients_tags?: null[] | null;
  update_key: string;
  vitamins_prev_tags?: null[] | null;
  vitamins_tags?: null[] | null;
}
export interface ThreatenedSpeciesOrCategoriesPropertiesOrCategoryProperties {}
export interface EcoscoreData {
  adjustments: Adjustments;
  agribalyse: Agribalyse;
  missing: Missing;
  missing_agribalyse_match_warning: number;
  status: string;
}
export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients;
  packaging: Packaging;
  production_system: ProductionSystem;
  threatened_species: ThreatenedSpeciesOrCategoriesPropertiesOrCategoryProperties;
}
export interface OriginsOfIngredients {
  aggregated_origins?: AggregatedOriginsEntity[] | null;
  epi_score: number;
  epi_value: number;
  origins_from_origins_field?: string[] | null;
  transportation_scores: TransportationScoresOrTransportationValuesOrValues;
  transportation_values: TransportationScoresOrTransportationValuesOrValues;
  values: TransportationScoresOrTransportationValuesOrValues;
  warning: string;
}
export interface AggregatedOriginsEntity {
  origin: string;
  percent: number;
}
export interface TransportationScoresOrTransportationValuesOrValues {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  xk: number;
}
export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number;
  packagings?: PackagingsEntity1[] | null;
  score: number;
  value: number;
  warning: string;
}
export interface PackagingsEntity1 {
  ecoscore_material_score: number;
  ecoscore_shape_ratio: string;
  material: string;
  shape: string;
}
export interface ProductionSystem {
  labels?: null[] | null;
  value: number;
  warning: string;
}
export interface Agribalyse {
  warning: string;
}
export interface Missing {
  agb_category: number;
  labels: number;
  origins: number;
  packagings: number;
}
export interface Images {
  front: FrontOrFrontEn;
  front_en: FrontOrFrontEn;
  front_fr: FrontFr;
  ingredients_en: IngredientsEnOrNutritionEn;
  nutrition_en: IngredientsEnOrNutritionEn;
  nutrition_fr: NutritionFr;
}

export interface Sizes {
  [key: string]: { h: string; w: string };
}

export interface FrontOrFrontEn {
  geometry: string;
  imgid: string;
  normalize?: null;
  rev: string;
  sizes: Sizes;
  white_magic?: null;
}

export interface FrontFr {
  angle: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}
export interface IngredientsEnOrNutritionEn {
  angle: number;
  geometry: string;
  imgid: string;
  normalize?: null;
  ocr: number;
  orientation: string;
  rev: string;
  sizes: Sizes;
  white_magic?: null;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}
export interface NutritionFr {
  angle?: null;
  geometry: string;
  imgid: string;
  normalize: string;
  ocr: number;
  orientation: string;
  rev: string;
  sizes: Sizes;
  white_magic: string;
  x1?: null;
  x2?: null;
  y1?: null;
  y2?: null;
}
export interface IngredientsEntity {
  id: string;
  percent_estimate: number | string;
  percent_max: number | string;
  percent_min: number | string;
  rank?: number | null;
  text: string;
  percent?: string | null;
  vegan?: string | null;
  vegetarian?: string | null;
  has_sub_ingredients?: string | null;
}

export interface LanguagesCodes {
  en: number;
  fr: number;
}
export interface NutrientLevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}
export interface Nutriments {
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'nova-group': number;
  'nova-group_100g': number;
  'nova-group_serving': number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
}
export interface NutriscoreData {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_ratio: number;
  saturated_fat_ratio_points: number;
  saturated_fat_ratio_value: number;
  saturated_fat_value: number;
  score: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}
export interface PackagingsEntity {
  shape: string;
}
export interface SelectedImages {
  front: FrontOrNutrition;
  ingredients: Ingredients;
  nutrition: FrontOrNutrition;
}
export interface FrontOrNutrition {
  display: DisplayOrSmallOrThumb;
  small: DisplayOrSmallOrThumb;
  thumb: DisplayOrSmallOrThumb;
}
export interface DisplayOrSmallOrThumb {
  en: string;
  fr: string;
}
export interface Ingredients {
  display: DisplayOrSmallOrThumb1;
  small: DisplayOrSmallOrThumb1;
  thumb: DisplayOrSmallOrThumb1;
}
export interface DisplayOrSmallOrThumb1 {
  en: string;
}

export async function getProductDetails(barcode: string): Promise<AxiosResponse<OpenFoodDataResponse> | null> {
  try {
    return axios.get<OpenFoodDataResponse, null>(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
  } catch (error) {
    console.error(error);
    return null;
  }
}
