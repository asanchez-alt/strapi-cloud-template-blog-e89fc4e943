import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticleImageCard extends Schema.Component {
  collectionName: 'components_article_article_image_cards';
  info: {
    displayName: 'Article Image Card';
  };
  attributes: {
    article: Attribute.Relation<
      'article.article-image-card',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface ArticleArticleSectionTitle extends Schema.Component {
  collectionName: 'components_article_article_section_titles';
  info: {
    displayName: 'Article Section Title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ArticleFeedback extends Schema.Component {
  collectionName: 'components_article_feedbacks';
  info: {
    displayName: 'Feedback';
  };
  attributes: {
    icon: Attribute.Media;
  };
}

export interface ArticleRelatedArticles extends Schema.Component {
  collectionName: 'components_article_related_articles';
  info: {
    displayName: 'Related Articles';
  };
  attributes: {
    articles: Attribute.Relation<
      'article.related-articles',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface CategoryCategoryAccordion extends Schema.Component {
  collectionName: 'components_category_category_accordions';
  info: {
    displayName: 'Category Accordion';
  };
  attributes: {
    category: Attribute.Relation<
      'category.category-accordion',
      'oneToOne',
      'api::category.category'
    >;
  };
}

export interface CategoryImageCardCarousel extends Schema.Component {
  collectionName: 'components_category_image_card_carousels';
  info: {
    displayName: 'Image Card Carousel';
  };
  attributes: {
    carousel_item: Attribute.Component<'article.article-image-card', true>;
    category: Attribute.Relation<
      'category.image-card-carousel',
      'oneToOne',
      'api::category.category'
    >;
  };
}

export interface SharedCarrousel extends Schema.Component {
  collectionName: 'components_shared_carrousels';
  info: {
    displayName: 'Carrousel';
  };
  attributes: {
    images: Attribute.Media;
    title: Attribute.String;
    short_description: Attribute.Blocks;
  };
}

export interface SharedContactUs extends Schema.Component {
  collectionName: 'components_shared_contact_uses';
  info: {
    displayName: 'Contact Us';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedContextualMessage extends Schema.Component {
  collectionName: 'components_shared_contextual_messages';
  info: {
    displayName: 'Contextual Message';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    message: Attribute.Text;
    state: Attribute.Enumeration<['Danger', 'Warning', 'Neutral', 'Positive']> &
      Attribute.Required &
      Attribute.DefaultTo<'Neutral'>;
  };
}

export interface SharedFooterLink extends Schema.Component {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedFooterSection extends Schema.Component {
  collectionName: 'components_shared_footer_sections';
  info: {
    displayName: 'Footer Section';
  };
  attributes: {
    label: Attribute.String;
    footer_links: Attribute.Component<'shared.footer-link', true>;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedModal extends Schema.Component {
  collectionName: 'components_shared_modals';
  info: {
    displayName: 'Modal';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    message: Attribute.Blocks;
    icon: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedTableCell extends Schema.Component {
  collectionName: 'components_shared_table_cells';
  info: {
    displayName: 'Table Cell';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    order: Attribute.Integer;
  };
}

export interface SharedTableRow extends Schema.Component {
  collectionName: 'components_shared_table_rows';
  info: {
    displayName: 'Table Row';
    description: '';
  };
  attributes: {
    header: Attribute.Boolean;
    cells: Attribute.Component<'shared.table-cell', true>;
    style: Attribute.String;
  };
}

export interface SharedTable extends Schema.Component {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    rows: Attribute.Component<'shared.table-row', true>;
  };
}

export interface SharedVideo extends Schema.Component {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
    description: '';
  };
  attributes: {
    video: Attribute.Media & Attribute.Required;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article-image-card': ArticleArticleImageCard;
      'article.article-section-title': ArticleArticleSectionTitle;
      'article.feedback': ArticleFeedback;
      'article.related-articles': ArticleRelatedArticles;
      'category.category-accordion': CategoryCategoryAccordion;
      'category.image-card-carousel': CategoryImageCardCarousel;
      'shared.carrousel': SharedCarrousel;
      'shared.contact-us': SharedContactUs;
      'shared.contextual-message': SharedContextualMessage;
      'shared.footer-link': SharedFooterLink;
      'shared.footer-section': SharedFooterSection;
      'shared.image': SharedImage;
      'shared.modal': SharedModal;
      'shared.seo': SharedSeo;
      'shared.table-cell': SharedTableCell;
      'shared.table-row': SharedTableRow;
      'shared.table': SharedTable;
      'shared.video': SharedVideo;
    }
  }
}
