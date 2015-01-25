# -*- coding: utf-8 -*-
from jinja2 import Environment, PackageLoader
import os
from datetime import datetime

app_name = 'Blog'
templates_folder = 'templates'
posts_folder = 'posts'
base_template = 'base.html'

env = Environment(loader=PackageLoader(app_name, templates_folder))
template = env.get_template(base_template)
class Post(object):
    def __init__(self, name, date, content):
        self.name = name
        self.date = date
        self.content = content
        self.title = name
        self.id = name.lower().replace(' ', '-')

posts = []

path = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        app_name,
        posts_folder
        )

for filename in os.listdir(path):
    fname = os.path.join(path, filename)
    with open(fname, "r") as f:
        name = f.readline().decode('utf-8').strip('\n')
        date = f.readline().decode('utf-8').strip('\n')
        date_object = datetime.strptime(date, '%B %d, %Y')
        contents = f.read().decode('utf-8')
        new_post = Post(name, date, contents)
        posts.append(new_post)

# Sort posts by date
posts.sort(key=lambda r: r.date)

output =  template.render(posts=posts).encode('utf-8')
with open('index.html', 'wb') as index:
    index.write(output)
