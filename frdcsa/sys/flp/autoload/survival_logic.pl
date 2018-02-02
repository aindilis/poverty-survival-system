%% explicit modeling of will power, energy levels, etc.

%% functions specific to poverty and homelessness etc.

%% arranging a ride, begging, food pantries, shelters, etc.



%% (Howard Zinn - The objective should be to make sure that every
%%  man, woman, and child in the United States has adequate food,
%%  decent housing, free medical care, a free college education if
%%  they want it and can't afford it.)

makeSureThat(hasAccessTo(Person,Resources)) :-
	(   isa(Person,man) ;
	    isa(Person,woman) ;
	    isa(Person,child)),
	findall(Resource,desires(Person,haveAccessTo(Person,Resource)),Resources).

%% forwardChaining :-
%% 	member(Resource,[adequateFood,decentHousing,freeMedicalCare,freeCollegeEducation]),
%% 	desires(Person,haveAccessTo(Person,Resource)).