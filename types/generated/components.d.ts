import type { Struct, Schema } from '@strapi/strapi';

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'file';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ExperianceExperiance extends Struct.ComponentSchema {
  collectionName: 'components_experiance_experiances';
  info: {
    displayName: 'Experiance';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    currentlyWorking: Schema.Attribute.String;
    workSummery: Schema.Attribute.Text;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'skills.skills': SkillsSkills;
      'experiance.experiance': ExperianceExperiance;
      'education.education': EducationEducation;
    }
  }
}
