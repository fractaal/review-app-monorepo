// Define the structure for ordinal rating values
export type OrdinalRatingValue = {
  name: string; // e.g., 'Good', 'Bad', etc.
  description?: string; // Optional description to explain the rating
  color?: string; // Optional color to represent the value visually
};

// Discriminated union based on the type of rating system
export type Rating =
  | {
      type: "numeric";
      minValue: number; // e.g., 1 for a 1-5 scale or 0 for a 0-10 scale
      maxValue: number; // e.g., 5 or 10
      value: number; // Numeric value between minValue and maxValue
    }
  | {
      type: "ordinal";
      values: OrdinalRatingValue[]; // Array of custom ordinal values
      value: string; // Selected ordinal value, referring to a name in RatingValue[]
    };

export type Trait = {
  name: string; // Name of the trait
  value: string; // Value of the trait
};

export type Review = {
  title: string; // Title of the review
  target: string; // Target of the review, e.g., a restaurant name
  review: string; // The review content
  rating: Rating; // The rating system used for the review

  subReviews: SubReview[]; // Array of sub-reviews

  traits: Trait[];
};

export type SubReview = {
  target: string; // Target of the review, e.g., a food item, the service, etc.
  review: string; // The review content
  rating: Rating; // The rating system used for the review
};
