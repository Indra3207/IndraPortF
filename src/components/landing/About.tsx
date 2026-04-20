import { about, achievements, education, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/logo.png"
          alt="About"
          width={100}
          height={100}
          className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="mt-4 size-6">{skill}</div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <SectionHeading subHeading="Academic" heading="Education" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-lg border border-gray-200 dark:border-gray-800 p-5"
            >
              <h4 className="text-lg font-semibold">{edu.degree}</h4>
              <p className="text-secondary mt-1">{edu.institution}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-secondary">{edu.year}</span>
                <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-12">
        <SectionHeading subHeading="Notable" heading="Achievements" />
        <div className="mt-6 flex flex-col gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="flex items-center gap-3 rounded-lg border border-gray-200 dark:border-gray-800 p-4"
            >
              <span className="text-lg">🏆</span>
              <p className="text-secondary">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
