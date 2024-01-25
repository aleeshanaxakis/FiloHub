const { User, Challenge } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');