
        // EaseBot keyword responses
    function getEaseBotResponse(userMessage) {
        const msg = userMessage.toLowerCase();
        if(msg.includes('sad')) {
            return "Hey, I’m really sorry you’re feeling low. I’m here for you, no matter what. Do you want to let it out, or should we distract ourselves with something light? 😔";
        } else if(msg.includes('happy')) {
            return "Yayyy I’m so happy for you!! You deserve this. Tell me everything, I want to hear every detail 🥳💖";
        } else if(msg.includes('anxious')) {
            return "Breathe with me for a sec. In… out… you’re okay. I know it feels heavy right now, but you’ve handled tough moments before and you’ll get through this too. I’ve got you 😥";
        } else if(msg.includes('nervous')) {
            return "Totally normal to feel this way — it means you care. You’re stronger than you think, and I’m rooting for you the whole time. You’ve got this 💪✨";
        } else if(msg.includes('angry')) {
            return "I get it, sometimes things just push us over the edge. It’s okay to feel angry. Want to rant it all out to me? I’ll listen — no judgment 😡";
        } else {
            return "I hear you. Tell me more…";
        }
    }

    // Mood-based playlists
    function getMoodPlaylist(userMessage) {
        const msg = userMessage.toLowerCase();
        if(msg.includes('happy')) {
            return "<a href='https://youtu.be/h1qMbJ_bSQ0?si=8iJbk8tdKUXKXTcM' target='_blank'>🎵 Happy Playlist</a>";
        } else if(msg.includes('sad')) {
            return "<a href='https://youtu.be/T8R_l_3__4o?si=2aSFS1_RfuQsJBbG' target='_blank'>🎵 Cheer Up Playlist</a>";
        } else if(msg.includes('anxious')) {
            return "<a href='https://youtu.be/LP7i712PkFM?si=Uw9g-_NyvrUzAOqm' target='_blank'>🎵 Calm Playlist</a>";
        } else {
            return "";
        }
    }

    // Event listener for send button
    document.getElementById('easebotSendBtn').addEventListener('click', () => {
        const userInput = document.getElementById('easebotInput').value;
        const botReply = getEaseBotResponse(userInput);
        const playlist = getMoodPlaylist(userInput);

        const chatBox = document.getElementById('easebotChatBox');
        chatBox.innerHTML += `<div class="user-msg">You: ${userInput}</div>`;
        chatBox.innerHTML += `<div class="bot-msg">EaseBot: ${botReply}</div>`;

        const playlistBox = document.getElementById('easebotPlaylist');
        playlistBox.innerHTML = playlist;

        document.getElementById('easebotInput').value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll
    });
        // Page Navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Get all page elements and navigation links
            const pages = document.querySelectorAll('.page');
            const navLinks = document.querySelectorAll('.nav-link');
            const pageLinks = document.querySelectorAll('[data-page]');
            
            // Function to show a specific page
            function showPage(pageId) {
                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show the selected page
                document.getElementById(pageId).classList.add('active');
                
                // Update active navigation link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-page') === pageId) {
                        link.classList.add('active');
                    }
                });
            }
            
            // Add click event to all navigation links
            pageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = this.getAttribute('data-page');
                    showPage(pageId);
                    
                    // Scroll to top of the page
                    window.scrollTo(0, 0);
                });
            });
            function getMoodPlaylist(userMessage) {
                const msg = userMessage.toLowerCase();
                if(msg.includes('happy')) {
                    return "<a href='https://youtu.be/h1qMbJ_bSQ0?si=8iJbk8tdKUXKXTcM' target='_blank'>🎵 Happy Playlist</a>";
                } else if(msg.includes('sad')) {
                    return "<a href='https://youtu.be/T8R_l_3__4o?si=2aSFS1_RfuQsJBbG' target='_blank'>🎵 Cheer Up Playlist</a>";
                } else if(msg.includes('anxious')) {
                    return "<a href='https://youtu.be/LP7i712PkFM?si=Uw9g-_NyvrUzAOqm' target='_blank'>🎵 Calm Playlist</a>";
                } else {
                    return "";
    }
}
            
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mainNav = document.getElementById('main-nav');
            
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.style.display = mainNav.style.display === 'flex' ? 'none' : 'flex';
            });
            
            // Emergency modal
            const emergencyBtn = document.getElementById('emergencyBtn');
            const emergencyFooterBtn = document.getElementById('emergencyFooterBtn');
            const emergencyModal = document.getElementById('emergencyModal');
            const modalClose = document.getElementById('modalClose');
            
            function toggleEmergencyModal() {
                emergencyModal.classList.toggle('active');
            }
            
            emergencyBtn.addEventListener('click', toggleEmergencyModal);
            emergencyFooterBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleEmergencyModal();
            });
            modalClose.addEventListener('click', toggleEmergencyModal);
            
            // Journal functionality
            const entryList = document.getElementById('entryList');
            const journalContent = document.getElementById('journalContent');
            const saveEntryBtn = document.getElementById('saveEntryBtn');
            const deleteEntryBtn = document.getElementById('deleteEntryBtn');
            const newEntryBtn = document.getElementById('newEntryBtn');
            const editorDate = document.getElementById('editorDate');
            
            // Set current date
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            editorDate.textContent = now.toLocaleDateString('en-US', options);
            
            // Entry selection
            const entryItems = document.querySelectorAll('.entry-item');
            entryItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Remove active class from all items
                    entryItems.forEach(i => i.classList.remove('active'));
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // For demo purposes, set some content
                    if (this.getAttribute('data-id') === '1') {
                        journalContent.value = "Feeling much better after my meditation session today. The breathing exercises really helped with my anxiety. I noticed that when I focus on my breath, my worries seem to fade into the background. I'm going to try to make this a daily practice.";
                    } else if (this.getAttribute('data-id') === '2') {
                        journalContent.value = "Had a difficult day at work, but talking to EaseBot helped me process my feelings. Grateful for this resource. My manager was particularly demanding today, and I felt overwhelmed with the number of tasks. After work, I went for a walk in the park, which helped clear my mind.";
                    } else {
                        journalContent.value = "Started my mindfulness journey today. I'm hopeful that consistent practice will help with my stress levels. I've heard so many good things about meditation and mindfulness. I tried the 5-minute breathing exercise and was surprised at how quickly the time passed. Looking forward to trying more sessions.";
                    }
                });
            });
            
            // Save entry
            saveEntryBtn.addEventListener('click', function() {
                if (journalContent.value.trim() === '') {
                    alert('Please write something before saving.');
                    return;
                }
                
                alert('Entry saved successfully!');
                
                // For demo purposes, update the first entry
                const firstEntry = document.querySelector('.entry-item[data-id="1"] .entry-preview');
                const preview = journalContent.value.length > 100 
                    ? journalContent.value.substring(0, 100) + '...' 
                    : journalContent.value;
                firstEntry.textContent = preview;
                
                // Update date to current time
                const timeOptions = { hour: '2-digit', minute: '2-digit' };
                const dateElement = document.querySelector('.entry-item[data-id="1"] .entry-date');
                dateElement.textContent = `Today, ${now.toLocaleTimeString('en-US', timeOptions)}`;
            });
            
            // Delete entry
            deleteEntryBtn.addEventListener('click', function() {
                if (journalContent.value.trim() === '') {
                    alert('Nothing to delete.');
                    return;
                }
                
                if (confirm('Are you sure you want to delete this entry?')) {
                    journalContent.value = '';
                    alert('Entry deleted.');
                }
            });
            
            // New entry
            newEntryBtn.addEventListener('click', function() {
                journalContent.value = '';
                entryItems.forEach(i => i.classList.remove('active'));
            });
            
            // EaseBot functionality
            const chatMessages = document.getElementById('chatMessages');
            const chatInput = document.getElementById('chatInput');
            const sendMessageBtn = document.getElementById('sendMessageBtn');
            
            function addMessage(text, isUser = false) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user' : 'bot');
                messageDiv.textContent = text;
                
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            function processUserMessage(message) {
                const lowerMsg = message.toLowerCase();
                
                // Simple response logic
                if (lowerMsg.includes('anxious') || lowerMsg.includes('anxiety') || lowerMsg.includes('nervous')) {
                    addMessage("I understand that anxiety can be really challenging. Have you tried the breathing exercises in the Meditation section? They can help calm your nervous system.");
                } else if (lowerMsg.includes('sad') || lowerMsg.includes('depressed') || lowerMsg.includes('unhappy')) {
                    addMessage("I'm sorry you're feeling this way. It might help to listen to some calming music or read stories from others who have been through similar experiences. Would you like me to suggest something?");
                } else if (lowerMsg.includes('stress') || lowerMsg.includes('stressed')) {
                    addMessage("Stress can be overwhelming. Journaling about what's causing your stress can sometimes help put things in perspective. Would you like to try that?");
                } else if (lowerMsg.includes('thank')) {
                    addMessage("You're welcome! I'm always here to help. Remember to be kind to yourself today.");
                } else {
                    addMessage("Thanks for sharing. How does that make you feel? Is there something specific you'd like help with today?");
                }
            }
            
            sendMessageBtn.addEventListener('click', function() {
                const message = chatInput.value.trim();
                if (message === '') return;
                
                addMessage(message, true);
                chatInput.value = '';
                
                // Bot response after a short delay
                setTimeout(() => {
                    processUserMessage(message);
                }, 1000);
            });
            
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendMessageBtn.click();
                }
            });
            
            // Music filter functionality
            const musicFilters = document.querySelectorAll('.music-filter');
            const musicCards = document.querySelectorAll('.music-card');
            
            musicFilters.forEach(filter => {
                filter.addEventListener('click', function() {
                    // Remove active class from all filters
                    musicFilters.forEach(f => f.classList.remove('active'));
                    // Add active class to clicked filter
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Show/hide music cards based on filter
                    musicCards.forEach(card => {
                        if (filterValue === 'all') {
                            card.style.display = 'block';
                        } else {
                            if (card.getAttribute('data-category') === filterValue) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });
