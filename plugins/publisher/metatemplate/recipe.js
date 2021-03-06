{
	portal: 'Your site',
	station: 'Recipes',
	channel: 'Some channel',
	title: 'My Recipes',
	media: 'recipe',
	
	export: [
		{
			url: 'recipes/',
			template: 'recipe.html',
		}
	],
	
	modules: {
		recipe <Recipe>: {
			content <Content>: {
				title: {
					type: 'text',
					title: 'Title',
					required: true,
					minlength: 5,
					maxlength: 255,
					charcount: true,
				},
				
				description: {
					type: 'textarea',
					title: 'Description',
					description: 'Will appear in the index of recipes',
					required: true,
					charcount: true,
				},
				
				credit: {
					type: 'text',
					title: 'Credit',
				},
				
				difficult: {
					type: 'radio',
					title: 'Difficult',
					options: ['Easy', 'Medium', 'Hard'],
				},
				
				prep: {
					type: 'number',
					title: 'Preparation time',
					description: 'In minutes',
				},
				
				cook: {
					type: 'number',
					title: 'Cook time',
					description: 'In minutes',
				},
				
				serves: {
					type: 'number',
					title: 'Serves',
				},
				
				calories: {
					type: 'number',
					title: 'Calories',
					description: 'In kilocalories',
				},
				
				course: {
					type: 'radio',
					title: 'Course',
					options: ['Brunch', 'Cakes and baking', 'Desserts', 'Drinks and cocktails', 'Light meals & snacks', 'Main course', 'Other', 'Side dishes', 'Starters & nibbles'],
				},
				
				couisine: {
					type: 'checkbox',
					title: 'Couisine',
					options: ['African', 'American', 'American - Traditional', 'Asian', 'Austrian', 'British/ Irish', 'Cajun/ Creole', 'California', 'Caribbean', 'Central/ South American', 'Chinese', 'Cuban', 'Eastern European', 'French', 'German', 'Greek', 'Hawaiian', 'Hungarian', 'Indian', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Moroccan', 'Native American', 'New American', 'New England', 'Pacific Northwest', 'Pacific Rim', 'Scandinavian', 'South American', 'Southern', 'Southwest', 'Spanish', 'Swiss', 'Thai', 'Vietnamese']
				}
			},
			
			image <Featured image>: {
				image: {
					type: 'file',
					title: 'Image',
					description: 'URL of the image',
				},
				
				credit: {
					type: 'text',
					title: 'Credit',
					description: 'Photographer/Source/License',
				},
				
				legend: {
					type: 'text',
					title: 'Legend/title',
				},
			},
			
			tags <Tags>: {
				tags: {
					type: 'tags',
					title: 'Tags',
				},
			}
		},
		
		sessions <Session> *: {
			name <Name>: {
				name: {
					type: 'text',
				}
			},
			
			ingredients <Ingredients>: {
				ingredient: {
					type: 'text',
					multiple: true,
				}
			},
			
			preparation <Preparation>: {
				preparation: {
					type: 'textarea',
					multiple: true,
				}
			}
		},
		
		addendum <Addendum>: {
			content <Addendum>: {
				text: {
					type: 'textarea',
					title: 'Text',
				}
			},
		},
		
		comments <Comments (dev)>: {
			settings <Settings>: {
				allow: {
					type: 'radio',
					title: 'Allow comments?',
					options: [[1, 'Yes'], [0, 'No']],
					default: 0,
				}
			}
		},
		
		interaction <Interaction>: {
			facebook <Facebook>: {
				title: {
					type: 'text',
					title: 'Title',
				},
				
				description: {
					type: 'textarea',
					title: 'Description',
				},
				
				image: {
					type: 'file',
					title: 'Image',
					description: 'URL of the image (300x300)',
				}
			},
			
			seo <SEO>: {
				description: {
					type: 'text',
					title: 'Description',
				},
				
				keywords: {
					type: 'text',
					title: 'Keywords',
				},
				
				robots: {
					type: 'select',
					title: 'Robots',
					options: ['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow']
				}
			}
		}
	}
}